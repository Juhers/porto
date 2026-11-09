// Orbit project di belakang foto profil — versi ringan.
// Perubahan: tanpa blur per-frame (diganti opacity), FPS dibatasi di HP,
// tidak menulis zIndex tiap frame, resize di-debounce (address bar HP sering memicu resize),
// animasi berhenti saat hero tidak terlihat / tab disembunyikan.
(function () {
    const layer = document.querySelector('.floating-assets');
    const photo = document.querySelector('.profile-section');
    if (!layer || !photo) return;

    const allCards = Array.from(layer.querySelectorAll('.float-card'));
    const sizeMul = [1, 0.82, 1.05, 0.9, 1, 0.78, 1.08, 0.88];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = () => window.innerWidth <= 700;

    const PERIOD = reduceMotion ? 90 : 36;
    const FRAME_MS = 1000 / 30; // 30 fps cukup untuk orbit pelan
    let cx = 0, cy = 0, rx = 0, ry = 0;
    let active = [];
    let widths = [];
    let lastZ = [];
    let running = false;
    let visible = true;
    let lastDraw = 0;
    let lastWidth = window.innerWidth;
    const startTime = performance.now();

    function measure() {
        const L = layer.getBoundingClientRect();
        const P = photo.getBoundingClientRect();
        if (!P.width || !P.height) return;

        const ring = window.getComputedStyle(photo, '::before');
        const ringW = parseFloat(ring.width);
        const ringH = parseFloat(ring.height);
        const ringLeft = parseFloat(ring.left);
        const ringTop = parseFloat(ring.top);
        let tx = 0, ty = 0;
        if (ring.transform && ring.transform !== 'none') {
            const m = new DOMMatrix(ring.transform);
            tx = m.m41; ty = m.m42;
        }

        if (ringW > 0 && ringH > 0 && !isNaN(ringLeft) && !isNaN(ringTop)) {
            cx = P.left - L.left + ringLeft + tx + ringW / 2;
            cy = P.top - L.top + ringTop + ty + ringH / 2;
            rx = ringW / 2;
            ry = ringH / 2;
        } else {
            cx = P.left - L.left + P.width / 2;
            cy = P.top - L.top + P.height * 0.5;
            rx = ry = Math.min(P.width * 0.39, 280);
        }

        const base = Math.max(64, Math.min(180, rx * 0.4));
        const count = isMobile() ? 6 : allCards.length;

        active = [];
        widths = [];
        lastZ = [];
        allCards.forEach((card, i) => {
            if (i < count) {
                const w = base * sizeMul[i % sizeMul.length];
                card.style.display = '';
                card.style.width = w + 'px';
                active.push(card);
                widths.push(w);
                lastZ.push(-1);
            } else {
                card.style.display = 'none';
            }
        });
        draw(performance.now());
    }

    function draw(now) {
        const t = (now - startTime) / 1000;
        const phase = (t * 2 * Math.PI) / PERIOD;
        const n = active.length;

        for (let i = 0; i < n; i++) {
            const card = active[i];
            const a = phase + (i * 2 * Math.PI) / n;
            const s = Math.sin(a);
            const depth = (s + 1) / 2;
            const w = widths[i];
            const bob = reduceMotion ? 0 : Math.sin(t * 1.1 + i * 1.7) * 5;
            const tilt = reduceMotion ? 0 : Math.sin(t * 0.6 + i) * 4;
            const x = cx + rx * Math.cos(a) - w / 2;
            const y = cy + ry * s - w / 2 + bob;
            const scale = 1 + 0.45 * depth;

            card.style.transform =
                'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) rotate(' +
                tilt.toFixed(2) + 'deg) scale(' + scale.toFixed(3) + ')';
            // Pengganti blur: bagian belakang orbit lebih redup (murah, tanpa repaint)
            card.style.opacity = 1;

            const z = Math.round(depth * 100);
            if (z !== lastZ[i]) { card.style.zIndex = z; lastZ[i] = z; }
        }
    }

    function loop(now) {
        if (!running) return;
        requestAnimationFrame(loop);
        if (now - lastDraw < FRAME_MS) return;
        lastDraw = now;
        draw(now);
    }

    function update() {
        const shouldRun = visible && !document.hidden;
        if (shouldRun === running) return;
        running = shouldRun;
        if (running) requestAnimationFrame(loop);
    }

    // resize di-debounce; abaikan resize yang hanya mengubah tinggi (address bar HP)
    let resizeTimer = 0;
    function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth === lastWidth && active.length) return;
            lastWidth = window.innerWidth;
            measure();
        }, 150);
    }

    measure();
    window.addEventListener('load', measure);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', update);

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            visible = entries[0].isIntersecting;
            update();
        }, { threshold: 0 }).observe(layer);
    }
    update();
})();