// const menuBtn = document.querySelector('.menu-btn');
// const leftNav = document.querySelector('.left-nav');

// let menuOpen = false;
// let slide = false;

// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('open');
//     leftNav.classList.add('slide');
//     menuOpen = true;
//     slide = true;
//   } else {
//     menuBtn.classList.remove('open');
//     leftNav.classList.remove('slide');
//     menuOpen = false;
//     slide = false;
//   }
// });

function openNav() {
  document.getElementById('mySidenav').style.width = '60vw';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

const currentDate = new Date();
const year = currentDate.getFullYear();
// console.log(year);
document.getElementById('year').innerHTML = '&#169;Copyright ' + year;
