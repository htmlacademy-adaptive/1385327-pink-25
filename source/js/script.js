let mainHeader = document.querySelector('.main-header');
let headNav = document.querySelector('.header-navigation');
let navToggle = document.querySelector('.header-navigation__toggle');

headNav.classList.remove('header-navigation--nojs');
mainHeader.classList.remove('main-header--nojs');

navToggle.addEventListener('click', function () {
  if (headNav.classList.contains('header-navigation--closed')) {
    headNav.classList.remove('header-navigation--closed');
    headNav.classList.add('header-navigation--opened');
  } else {
    headNav.classList.add('header-navigation--closed');
    headNav.classList.remove('header-navigation--opened');
  }
});

let formFeedback = document.querySelector('.form-feedback');
let lastname = document.getElementById('lastname');
let firstname = document.getElementById('firstname');
let email = document.getElementById('email');
let feedbackButton = formFeedback.querySelector('.form-feedback__button');

let error = document.querySelector('.modal-form--error');
let errorBtn = error.querySelector('.modal-form__buttons');
let success = document.querySelector('.modal-form--success');
let successBtn = success.querySelector('.modal-form__buttons');

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!lastname.value || !firstname.value || !email.value) {
    error.classList.add('modal-form--show');
    feedbackButton.setAttribute('disabled', true);
  } else {
    success.classList.add('modal-form--show');
  }
});

errorBtn.addEventListener('click', function (evt) {
  error.classList.remove('modal-form--show');
  feedbackButton.removeAttribute('disabled');
});

successBtn.addEventListener('click', function (evt) {
  success.classList.remove('modal-form--show');
  formFeedback.action = "https://echo.htmlacademy.ru/";
  formFeedback.submit();
  formFeedback.reset();
});
