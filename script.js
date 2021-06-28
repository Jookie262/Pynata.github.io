const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.nav-header');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navbar.classList.add('change');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navbar.classList.remove('change');
    }
});