// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navList.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navList.classList.remove('open');
        });
    });
}
