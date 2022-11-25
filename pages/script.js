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

  menuBtn.addEventListener('click', () => !menuOpen ? openBurgerMenu() : closeBurgerMenu());

  const nav = document.querySelector('ul'),
    navItems = document.querySelectorAll('li');

  nav.addEventListener('click', () => {
    navItems.forEach(() => closeBurgerMenu());
  });

  // copyright year
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  document.getElementById('year').innerHTML = '&#169; Copyright 2020 - ' + year;

  // Go top button
  let goTopButton = document.querySelector(".goTopButton");
  // Listen to scroll event and display button
  window.addEventListener('scroll', () => {
    scrollFunction()
  })

  // When the user clicks on the button, scroll to the top of the document
  goTopButton.addEventListener('click', () => {
    topFunction()
  })

  // Display button when the user scrolls down 20px from the top of the document
  function scrollFunction() { 
    window.scrollY > 20 ? goTopButton.style.display = 'block' : goTopButton.style.display = 'none';
  }

  // Scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

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

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
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
