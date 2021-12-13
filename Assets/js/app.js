const menu = document.querySelector('.hamburger-menu')
const navList = document.querySelector('.nav-list')

menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  navList.classList.toggle('toggle-nav')
})