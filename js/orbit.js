// Orbit project mengikuti lingkaran di belakang foto profil.
// Kartu berjalan di garis lingkaran; bagian belakang orbit lebih kecil, redup, dan blur.
(function () {
    const layer = document.querySelector('.floating-assets');
    const photo = document.querySelector('.profile-section');
    if (!layer || !photo) return;

    const allCards = Array.from(layer.querySelectorAll('.float-card'));
    const sizeMul = [1, 0.82, 1.05, 0.9, 1, 0.78, 1.08, 0.88];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const PERIOD = reduceMotion ? 90 : 36; // detik untuk satu putaran penuh (lebih pelan bila OS meminta reduce motion)
    let cx = 0, cy = 0, rx = 0, ry = 0;
    let active = [];
    let widths = [];
    let running = false;
    let startTime = performance.now();

    function measure() {
        const L = layer.getBoundingClientRect();
        const P = photo.getBoundingClientRect();
        if (!P.width || !P.height) return;

        // Ikuti lingkaran di belakang foto (.profile-section::before):
        // posisi & ukurannya dibaca dari CSS, jadi ikut berubah di setiap breakpoint.
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
            // cadangan bila lingkaran tidak terbaca
            cx = P.left - L.left + P.width / 2;
            cy = P.top - L.top + P.height * 0.5;
            rx = ry = Math.min(P.width * 0.39, 280);
        }

        const base = Math.max(64, Math.min(180, rx * 0.4)); // ukuran kartu: ~60% radius lingkaran
        const count = window.innerWidth <= 700 ? 6 : allCards.length;

        active = [];
        widths = [];
        allCards.forEach((card, i) => {
            if (i < count) {
                const w = base * sizeMul[i % sizeMul.length];
                card.style.display = '';
                card.style.width = w + 'px';
                active.push(card);
                widths.push(w);
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

        active.forEach((card, i) => {
            const a = phase + (i * 2 * Math.PI) / n;
            const s = Math.sin(a);            // -1 belakang (atas) … 1 depan (bawah)
            const depth = (s + 1) / 2;        // 0 … 1
            const w = widths[i];
            const bob = reduceMotion ? 0 : Math.sin(t * 1.1 + i * 1.7) * 5;
            const tilt = reduceMotion ? 0 : Math.sin(t * 0.6 + i) * 4;
            const x = cx + rx * Math.cos(a) - w / 2;
            const y = cy + ry * s - w / 2 + bob;
            const scale = 1 + 0.45 * depth;

            card.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) rotate(' + tilt.toFixed(2) + 'deg) scale(' + scale.toFixed(3) + ')';
            card.style.opacity = 1;
            card.style.zIndex = String(Math.round(depth * 100));
            card.style.filter = 'blur(' + ((1 - depth) * 0.6).toFixed(2) + 'px)';
        });
    }

    function loop(now) {
        if (!running) return;
        draw(now);
        requestAnimationFrame(loop);
    }

    function setRunning(on) {
        if (on === running) return;
        running = on;
        if (on) requestAnimationFrame(loop);
    }

    measure();
    window.addEventListener('load', measure);
    window.addEventListener('resize', measure);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(layer);

    // Mulai langsung; observer di bawah menghentikan animasi saat hero tidak terlihat
    setRunning(true);

    // Animasi hanya berjalan saat bagian hero terlihat
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            setRunning(entries[0].isIntersecting);
        }, { threshold: 0 }).observe(layer);
    } else {
        setRunning(true);
    }
})();