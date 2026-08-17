const toggleButton = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem('npit-theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    if (toggleButton) {
        toggleButton.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', current);
        localStorage.setItem('npit-theme', current);
        toggleButton.textContent = current === 'dark' ? '🌙' : '☀️';
    });
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}
