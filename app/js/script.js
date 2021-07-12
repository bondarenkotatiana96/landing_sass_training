const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
  console.log('open menu');
  header.classList.toggle('open'); //opening hamburger menu
  body.classList.toggle('noscroll');

  if (header.classList.contains('open')) {
    fadeElems.forEach(el => {
      el.classList.add('fade-in');
      el.classList.remove('fade-out');
    });
  } else {
    fadeElems.forEach(el => {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });
  }
  
});