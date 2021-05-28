// hamburger menu code
const navigation = document.querySelector('.navigation');
const menuBtn = document.querySelector('.menu-btn__burger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navigation.classList.toggle('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navigation.classList.remove('active');
    menuOpen = false;
  }
});

const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById('year').innerHTML = '&#169;Copyright ' + year;
