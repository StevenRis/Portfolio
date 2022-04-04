'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation');
  const menuBtn = document.querySelector('.menu-btn__burger, .nav-item');
  const navItem = document.querySelector('.nav-item');
  const socialIcons = document.querySelector('.social-icons');
  let menuOpen = false;

  function openBurgerMenu() {
    menuBtn.classList.add('open');
    navigation.classList.add('active');
    socialIcons.classList.add('active');
    menuOpen = true;
  }

  function closeBurgerMenu() {
    menuBtn.classList.remove('open');
    navigation.classList.remove('active');
    socialIcons.classList.remove('active');
    menuOpen = false;
  }

  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      openBurgerMenu();
    } else {
      closeBurgerMenu();
    }
  });

  const nav = document.querySelector('ul'),
    navItems = document.querySelectorAll('li');

  nav.addEventListener('click', () => {
    navItems.forEach(() => closeBurgerMenu());
  });

  // copyright year
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  document.getElementById('year').innerHTML = '&#169; Copyright 2020 - ' + year;

  // send form
  const btn = document.getElementById('button');
  const popUp = document.querySelector('.popup-container');

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_8eadzxr';

    function sent() {
      popUp.classList.add('send');
      document.getElementById('form').reset();
    }

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        sent();

        function removeClass() {
          popUp.classList.remove('send');
        }
        setTimeout(removeClass, 3000);
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  });
});
