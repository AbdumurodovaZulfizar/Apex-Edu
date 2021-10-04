const menu = document.getElementById('menu-toggler');
const navbar = document.getElementById('navbar');
const menu_container = document.getElementById('menu-container');

menu_container.addEventListener('click', () => {
  navbar.classList.toggle('d-none');
});

window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.offer_slide');
  const slidesFile = document.querySelector('.carusel-inner');
  const slides_2 = document.querySelectorAll('.offer_slide-kurslar');
  const slidesFile_2 = document.querySelector('.carusel-inner-kurslar')
  slidesFile.style.width = slides.length * 100 + '%';
  slidesFile_2.style.width = slides_2.length * 100 + '%';
})

const setActiveButton = (button, str) => {
  const buttons = document.querySelectorAll(str);

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
};

const slider = document.querySelector('.carusel-inner');
const slider_2 = document.querySelector('.carusel-inner-kurslar');
// const line1 = document.getElementById('line1');
// const line2 = document.getElementById('line2');
// const line3 = document.getElementById('line3');
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('line1')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines');
    slider.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line2')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines');
    slider.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line3')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines');
    slider.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line4')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_2');
    slider_2.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line5')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_2');
    slider_2.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line6')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_2');
    slider_2.style.transform = 'translateX(-66.66%)';
  }
})

