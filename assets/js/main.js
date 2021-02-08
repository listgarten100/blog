
let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu')

burger.addEventListener('click', () => {
  console.log('hi');
  burger.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});