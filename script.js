document.addEventListener('DOMContentLoaded', function () {
    // Menu mobilne
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }

    // Po powrocie z FormSubmit – pokaż podziękowanie
    if (window.location.hash === '#dziekuje') {
        const msg = document.getElementById('dziekuje');
        const form = document.getElementById('contactForm');
        if (msg) msg.style.display = 'block';
        if (form) form.style.display = 'none';

        const kontakt = document.getElementById('kontakt');
        if (kontakt) kontakt.scrollIntoView({ behavior: 'smooth' });
    }
});
