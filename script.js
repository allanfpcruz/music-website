const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const sidebar = document.querySelector('.sidebar')

menuOpen.addEventListener('click', () => sidebar.style.left = '0'
)
menuClose.addEventListener('click', () => sidebar.style.left = '-100%')