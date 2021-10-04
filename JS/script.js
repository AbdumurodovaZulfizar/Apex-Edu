const menu = document.getElementById('menu-toggler');
const navbar = document.getElementById('navbar');
const menu_container = document.getElementById('menu-container');

menu_container.addEventListener('click', () => {
  navbar.classList.toggle('d-none');
});

window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.offer_slide');
  const wrapper = document.querySelector('.carusel-container');
  const slidesFile = document.querySelector('.carusel-inner');
  const width = getComputedStyle(wrapper);
  slidesFile.style.width = slides.length * 100 + '%';
})
