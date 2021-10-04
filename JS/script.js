const menu = document.getElementById('menu-toggler');
const navbar = document.getElementById('navbar');
const menu_container = document.getElementById('menu-container');

menu_container.addEventListener('click', () => {
  navbar.classList.toggle('d-none');
})
