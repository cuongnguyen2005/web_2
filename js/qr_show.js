document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.qr-overlay');
    const closeBtn = document.querySelector('.qr-close');

    function isDesktop() {
        return window.innerWidth >= 768;
    }

    function showOverlay() {
        if (isDesktop()) {
            overlay.style.display = 'flex';
        }
    }

    setTimeout(showOverlay, 500);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (isDesktop()) {
                showOverlay();
            } else {
                overlay.style.display = 'none';
            }
        }, 500);
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target === closeBtn) {
            overlay.style.display = 'none';
        }
    });
});
