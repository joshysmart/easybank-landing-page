const menuBtn = document.querySelector('.menu-btn');
const menuBtnBurger = document.querySelector('.menu-btn__burger');
const navLinks = document.querySelector('.nav__links');
const container = document.querySelector('.container');

function toggleDisplay() {
 menuBtnBurger.classList.toggle('open');
 navLinks.classList.toggle('open');
 container.classList.toggle('open-nav');
 console.log('hery')
}

menuBtn.addEventListener('click', toggleDisplay);