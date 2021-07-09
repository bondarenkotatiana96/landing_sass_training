const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
  console.log('open menu');
  header.classList.toggle('open'); //opening hambburger menu

  if (header.classList.contains('open')) {
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  } else {
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
  }
  
});