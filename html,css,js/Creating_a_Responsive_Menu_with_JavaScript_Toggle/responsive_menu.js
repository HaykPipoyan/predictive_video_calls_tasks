document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});
