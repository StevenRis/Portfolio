'use strict';

const lang = document.querySelector('.lang-pl');

// if (!location.hash) {
//   history.replaceState(null, null, '#en');
// }

function init() {
  lang.addEventListener('click', changeLanguage);
  window.addEventListener('popstate', newurl);
  history.replaceState('en', null, '#en');
}

function changeLanguage() {
  //   showpage('pl');
  history.pushState('pl', null, '#pl');
}

function newurl(e) {
  showpage(e.state);
  console.log(history.state);
}

// function showpage(current) {
//   databox.innerHTML = 'url-adres - page' + current;
// }

window.addEventListener('load', init);

console.log(history.state);
console.log(location);
