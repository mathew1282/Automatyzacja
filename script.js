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

// Formularz kontaktowy
function handleSubmit(e) {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const email = document.getElementById('email').value;
    const uwagi = document.getElementById('uwagi').value;

    console.log({ login, email, uwagi });

    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';

    // Opcjonalnie: mailto
    // const subject = encodeURIComponent('Zgłoszenie automatyzacji od ' + login);
    // const body = encodeURIComponent(`Login: ${login}\nEmail: ${email}\n\nUwagi:\n${uwagi}`);
    // window.location.href = `mailto:TWOJ_EMAIL@domena.pl?subject=${subject}&body=${body}`;
}

