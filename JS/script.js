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
  const slidesFile_2 = document.querySelector('.carusel-inner-kurslar');
  const slides_3 = document.querySelectorAll('.offer_slide-ustozlar');
  const slidesFile_3 = document.querySelector('.carusel-inner-ustozlar');
  const slides_4 = document.querySelectorAll('.offer_slide-videolar');
  const slidesFile_4 = document.querySelector('.carusel-inner-videolar');
  const slides_5 = document.querySelectorAll('.offer_slide-oquvchilar');
  const slidesFile_5 = document.querySelector('.carusel-inner-oquvchilar');
  const slides_6 = document.querySelectorAll('.offer_slide-mijozlar');
  const slidesFile_6 = document.querySelector('.carusel-inner-mijozlar');

  slidesFile.style.width = slides.length * 100 + '%';
  slidesFile_2.style.width = slides_2.length * 100 + '%';
  slidesFile_3.style.width = slides_3.length * 100 + '%';
  slidesFile_4.style.width = slides_4.length * 100 + '%';
  slidesFile_5.style.width = slides_5.length * 100 + '%';
  slidesFile_6.style.width = slides_6.length * 100 + '%';
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
const slider_3 = document.querySelector('.carusel-inner-ustozlar');
const slider_4 = document.querySelector('.carusel-inner-videolar');
const slider_5 = document.querySelector('.carusel-inner-oquvchilar');
const slider_6 = document.querySelector('.carusel-inner-mijozlar');
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
  } else if (e.target.classList.contains('line7')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_3');
    slider_3.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line8')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_3');
    slider_3.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line9')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_3');
    slider_3.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line10')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_4');
    slider_4.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line11')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_4');
    slider_4.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line12')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_4');
    slider_4.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line13')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_5');
    slider_5.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line14')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_5');
    slider_5.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line15')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_5');
    slider_5.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line16')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_6');
    slider_6.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line17')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_6');
    slider_6.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line18')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_6');
    slider_6.style.transform = 'translateX(-66.66%)';
  }
})

