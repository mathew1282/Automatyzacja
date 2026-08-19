// Menu mobilne
(function () {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('open'));
    });
})();

// Po wysłaniu FormSubmit wraca na stronę do sekcji kontakt
(function () {
    const next = document.querySelector('#contactForm input[name="_next"]');
    if (next) {
        next.value = window.location.href.split('#')[0] + '#kontakt';
    }
})();
