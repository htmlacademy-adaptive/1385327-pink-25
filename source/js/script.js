let headNav = document.querySelector('.header-navigation');
let navToggle = document.querySelector('.header-navigation__toggle');

headNav.classList.remove('header-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (headNav.classList.contains('header-navigation--closed')) {
    headNav.classList.remove('header-navigation--closed');
    headNav.classList.add('header-navigation--opened');
  } else {
    headNav.classList.add('header-navigation--closed');
    headNav.classList.remove('header-navigation--opened');
  }
});
