'use strict';

import year from './modules/year.js';
import goTopButton from './modules/goTopButton.js';
import burgerMenu from './modules/burgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  year();
  goTopButton();
});
