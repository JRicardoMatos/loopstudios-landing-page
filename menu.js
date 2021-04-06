const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    navLinks.classList.add("open");
})

close.addEventListener('click', () => {
    navLinks.classList.remove("open");
})