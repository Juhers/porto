// Three.js Viewer Function with Fixed Pivot & Rotation
function initViewer(container, modelPath, autoRotate = true, interactive = false) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f6f8); // abu terang

    // === CAMERA ===
    const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );
    camera.position.set(0, 1, 4);

    // === RENDERER ===
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // === LIGHT ===
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x00d4ff, 0.4, 50);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // === CONTROLS ===
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    if (interactive) {
        // MODE MODAL → interaktif penuh
        controls.enabled = true;
        controls.enablePan = true;
        controls.enableZoom = true;
    } else {
        // MODE PROJECT CARD → hanya autoRotate
        controls.enabled = false; // disable semua interaksi
        controls.enablePan = false;
        controls.enableZoom = false;
    }

    // === LOADING SPINNER ===
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "loading-spinner";
    container.appendChild(loadingSpinner);

    // === PIVOT ===
    const pivot = new THREE.Object3D();
    scene.add(pivot);

    if (!interactive) {
        pivot.position.y = 0.3; // naikkan sedikit
    }

    // === LOAD MODEL ===
    TOTAL_RESOURCES++;
    const loader = new THREE.GLTFLoader();
    loader.load(
        modelPath,
        (gltf) => {
            const model = gltf.scene;

            // shadow
            model.traverse((c) => {
                if (c.isMesh) {
                    c.castShadow = true;
                    c.receiveShadow = true;
                }
            });

            pivot.add(model);

            // ★ WAJIB
            model.updateWorldMatrix(true, true);

            // center + scale
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            model.position.sub(center);

            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) model.scale.setScalar(2.8 / maxDim);

            model.updateWorldMatrix(true, true);

            if (container.contains(loadingSpinner)) container.removeChild(loadingSpinner);

            resourceLoaded(); // 🔥 PENTING

            // === ANIMATE ===
            function animate() {
                requestAnimationFrame(animate);

                if (autoRotate) pivot.rotation.y += 0.005;

                controls.update();
                renderer.render(scene, camera);
            }
            animate();
        },
        undefined,
        (err) => {
            console.error("GLTF error:", err);
            if (container.contains(loadingSpinner)) container.removeChild(loadingSpinner);
            resourceLoaded();
        }
    );

    // === RESIZE ===
    const resizeObserver = new ResizeObserver(() => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);

    return controls; // bisa dikontrol dari luar (misal aktifkan modal)
}



// Initialize Viewers on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Hero Viewer
    const heroViewer = document.getElementById('hero-3d-viewer');
    if (heroViewer) {
        initViewer(heroViewer, 'assets/models/hero-model.glb');
    }

    // Portfolio Viewers (Lazy Load for Performance)
    const portfolioViewers = document.querySelectorAll('.project .viewer');
    const observerOptions = { threshold: 0.1 };
    const viewerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const viewer = entry.target;
                const modelPath = viewer.getAttribute('data-model');
                initViewer(viewer, modelPath);
                viewerObserver.unobserve(viewer); // Load only once
            }
        });
    }, observerOptions);

    portfolioViewers.forEach(viewer => viewerObserver.observe(viewer));
});