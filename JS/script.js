const menu = document.getElementById('menu-toggler');
const navbar = document.getElementById('navbar');
const menu_container = document.getElementById('menu-container');

menu_container.addEventListener('click', () => {
  navbar.classList.toggle('d-none');
});

window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.offer_slide');
  const slidesFile = document.querySelector('.carusel-inner');
  slidesFile.style.width = slides.length * 100 + '%';
})

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.lines');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
};

const slider = document.querySelector('.carusel-inner');
const active = document.getElementById('active');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('line1')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target);
    slider.style.transform = 'translateX(0)';
  } else if (e.target.classList.contains('line2')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target);
    slider.style.transform = 'translateX(-33.33%)';
  } else if (e.target.classList.contains('line3')) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(e.target);
    slider.style.transform = 'translateX(-66.66%)';
  }
})

line1.addEventListener('click', () => {
  
})

line2.addEventListener('click', () => {
  
})

line3.addEventListener('click', () => {
  
})
