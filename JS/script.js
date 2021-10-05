const menu = document.getElementById('menu-container');
const navbar = document.getElementById('navbar');

const setActiveButton = (button, str) => {
  const buttons = document.querySelectorAll(str);

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
};

menu.addEventListener('click', () => {
  if (menu.classList.contains('close')) {
    menu.innerHTML = `<div class="open-bar-1"></div>
    <div class="open-bar-2"></div>`;
    menu.classList.toggle('close');
    menu.classList.toggle('open');
    navbar.classList.toggle('d-none');
  } else if (menu.classList.contains('open')) {
    menu.innerHTML = `<div class="close-bar"></div>
    <div class="close-bar"></div>
    <div class="close-bar"></div>`;
    menu.classList.toggle('close');
    menu.classList.toggle('open');
    navbar.classList.toggle('d-none');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.offer_slide');
  const slidesFile = document.querySelector('.carusel-inner');
  const slides2 = document.querySelectorAll('.offer_slide-kurslar');
  const slidesFile2 = document.querySelector('.carusel-inner-kurslar');
  const slides3 = document.querySelectorAll('.offer_slide-ustozlar');
  const slidesFile3 = document.querySelector('.carusel-inner-ustozlar');
  const slides4 = document.querySelectorAll('.offer_slide-videolar');
  const slidesFile4 = document.querySelector('.carusel-inner-videolar');
  const slides5 = document.querySelectorAll('.offer_slide-oquvchilar');
  const slidesFile5 = document.querySelector('.carusel-inner-oquvchilar');
  const slides6 = document.querySelectorAll('.offer_slide-mijozlar');
  const slidesFile6 = document.querySelector('.carusel-inner-mijozlar');
  const line1 = document.getElementById('line1');
  const line4 = document.getElementById('line4');
  const line7 = document.getElementById('line7');
  const line10 = document.getElementById('line10');
  const line13 = document.getElementById('line13');
  const line16 = document.getElementById('line16');

  slidesFile.style.width = `${slides.length * 100}%`;
  slidesFile2.style.width = `${slides2.length * 100}%`;
  slidesFile3.style.width = `${slides3.length * 100}%`;
  slidesFile4.style.width = `${slides4.length * 100}%`;
  slidesFile5.style.width = `${slides5.length * 100}%`;
  slidesFile6.style.width = `${slides6.length * 100}%`;
  setActiveButton(line1, '.lines');
  setActiveButton(line4, '.lines_2');
  setActiveButton(line7, '.lines_3');
  setActiveButton(line10, '.lines_4');
  setActiveButton(line13, '.lines_5');
  setActiveButton(line16, '.lines_6');
});

const slider = document.querySelector('.carusel-inner');
const slider2 = document.querySelector('.carusel-inner-kurslar');
const slider3 = document.querySelector('.carusel-inner-ustozlar');
const slider4 = document.querySelector('.carusel-inner-videolar');
const slider5 = document.querySelector('.carusel-inner-oquvchilar');
const slider6 = document.querySelector('.carusel-inner-mijozlar');

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
    slider2.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line5')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_2');
    slider2.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line6')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_2');
    slider2.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line7')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_3');
    slider3.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line8')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_3');
    slider3.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line9')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_3');
    slider3.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line10')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_4');
    slider4.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line11')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_4');
    slider4.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line12')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_4');
    slider4.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line13')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_5');
    slider5.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line14')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_5');
    slider5.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line15')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_5');
    slider5.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('line16')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_6');
    slider6.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line17')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_6');
    slider6.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line18')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target, '.lines_6');
    slider6.style.transform = 'translateX(-66.66%)';
  } else if (e.target.classList.contains('ul-li')) {
    menu.innerHTML = `<div class="close-bar"></div>
    <div class="close-bar"></div>
    <div class="close-bar"></div>`;
    menu.classList.toggle('close');
    menu.classList.toggle('open');
    navbar.classList.toggle('d-none');
  }
});
