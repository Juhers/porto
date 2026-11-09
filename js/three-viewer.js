// Three.js viewer — versi ringan (hemat baterai / tidak bikin HP panas)
// Perubahan utama:
//  1. Render loop BERHENTI dan WebGL context DIBUANG saat viewer keluar layar / modal ditutup.
//  2. FPS dibatasi (24fps di HP), pixel ratio dibatasi, tanpa shadow & antialias di HP.
//  3. Render dijeda saat overlay (modal / lightbox) menutupi halaman.
//  4. Model GLB di-cache, jadi scroll bolak-balik tidak parsing ulang.

const IS_MOBILE =
    window.matchMedia('(max-width: 900px)').matches ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const MAX_PIXEL_RATIO = IS_MOBILE ? 1.25 : 2;
const CARD_FPS = IS_MOBILE ? 24 : 40;
const MODAL_FPS = IS_MOBILE ? 30 : 60;

// ---- cache model (parse sekali, clone untuk tiap viewer) ----
const modelCache = new Map();
function loadModel(path) {
    if (!modelCache.has(path)) {
        modelCache.set(path, new Promise((resolve, reject) => {
            new THREE.GLTFLoader().load(path, (gltf) => resolve(gltf.scene), undefined, reject);
        }).catch((err) => {
            modelCache.delete(path); // izinkan coba lagi
            throw err;
        }));
    }
    return modelCache.get(path).then((scene) => scene.clone(true));
}

function initViewer(container, modelPath, autoRotate = true, interactive = false) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f6f8);

    const camera = new THREE.PerspectiveCamera(
        60,
        (container.clientWidth || 1) / (container.clientHeight || 1),
        0.1,
        100
    );
    camera.position.set(0, 1, 4);

    const renderer = new THREE.WebGLRenderer({
        antialias: interactive || !IS_MOBILE,
        alpha: true,
        powerPreference: interactive ? 'default' : 'low-power'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = interactive && !IS_MOBILE; // shadow hanya di modal desktop
    container.appendChild(renderer.domElement);

    // Lampu
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = renderer.shadowMap.enabled;
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0x00d4ff, 0.4, 50);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Kontrol
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enabled = interactive;
    controls.enablePan = interactive;
    controls.enableZoom = interactive;

    // Spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    container.appendChild(loadingSpinner);

    const pivot = new THREE.Object3D();
    if (!interactive) pivot.position.y = 0.3;
    scene.add(pivot);

    // ---- loop render (dibatasi FPS) ----
    let disposed = false;
    let rafId = 0;
    let lastTime = 0;
    let modelReady = false;
    const frameInterval = 1000 / (interactive ? MODAL_FPS : CARD_FPS);

    function frame(t) {
        if (disposed) return;
        rafId = requestAnimationFrame(frame);

        const dt = t - lastTime;
        if (dt < frameInterval) return;
        lastTime = t;

        // Kartu di halaman utama tidak perlu render saat modal/lightbox menutupi layar
        if (!interactive && document.body.style.overflow === 'hidden') return;

        if (autoRotate) pivot.rotation.y += 0.005 * Math.min(dt / 16.7, 3);
        controls.update();
        renderer.render(scene, camera);
    }

    // ---- muat model ----
    loadModel(modelPath)
        .then((model) => {
            if (disposed) return;

            model.traverse((c) => {
                if (c.isMesh) {
                    c.castShadow = renderer.shadowMap.enabled;
                    c.receiveShadow = renderer.shadowMap.enabled;
                }
            });
            pivot.add(model);
            model.updateWorldMatrix(true, true);

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            model.position.sub(center);
            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) model.scale.setScalar(2.8 / maxDim);
            model.updateWorldMatrix(true, true);

            loadingSpinner.remove();
            modelReady = true;
            rafId = requestAnimationFrame(frame);
        })
        .catch((err) => {
            console.error('GLTF error:', err);
            loadingSpinner.remove();
        });

    // ---- resize ----
    const resizeObserver = new ResizeObserver(() => {
        const w = container.clientWidth, h = container.clientHeight;
        if (!w || !h) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // ---- dispose: hentikan loop + bebaskan WebGL context ----
    const origDispose = controls.dispose.bind(controls);
    controls.dispose = function () {
        if (disposed) return;
        disposed = true;
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
        origDispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        loadingSpinner.remove();
        if (container.viewerInstance === controls) container.viewerInstance = null;
    };

    return controls;
}

// ---- Kartu project: hidup hanya saat terlihat di layar ----
document.addEventListener('DOMContentLoaded', () => {
    const viewers = document.querySelectorAll('.project .viewer');

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting) {
                if (!el.viewerInstance) {
                    const path = el.getAttribute('data-model');
                    if (path) el.viewerInstance = initViewer(el, path, true, false);
                }
            } else if (el.viewerInstance) {
                el.viewerInstance.dispose(); // buang context saat keluar layar
                el.viewerInstance = null;
            }
        });
    }, { threshold: 0.15 });

    viewers.forEach((v) => io.observe(v));
});