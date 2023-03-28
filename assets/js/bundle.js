/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modules/burgerMenu.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/burgerMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burgerMenu = () => {
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

  menuBtn.addEventListener('click', () =>
    !menuOpen ? openBurgerMenu() : closeBurgerMenu()
  );

  const nav = document.querySelector('ul'),
    navItems = document.querySelectorAll('li');

  nav.addEventListener('click', () => {
    navItems.forEach(() => closeBurgerMenu());
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);


/***/ }),

/***/ "./assets/js/modules/goTopButton.js":
/*!******************************************!*\
  !*** ./assets/js/modules/goTopButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const goTopButton = () => {
  // Go top button
  let goTopButton = document.querySelector('.goTopButton');
  // Listen to scroll event and display button
  window.addEventListener('scroll', () => {
    scrollFunction();
  });

  // When the user clicks on the button, scroll to the top of the document
  goTopButton.addEventListener('click', () => {
    topFunction();
  });

  // Display button when the user scrolls down 20px from the top of the document
  function scrollFunction() {
    window.scrollY > 20
      ? (goTopButton.style.display = 'block')
      : (goTopButton.style.display = 'none');
  }

  // Scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goTopButton);


/***/ }),

/***/ "./assets/js/modules/year.js":
/*!***********************************!*\
  !*** ./assets/js/modules/year.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// copyright year

const year = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  document.getElementById('year').innerHTML = '&#169; Copyright 2020 - ' + year;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (year);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_year_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/year.js */ "./assets/js/modules/year.js");
/* harmony import */ var _modules_goTopButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/goTopButton.js */ "./assets/js/modules/goTopButton.js");
/* harmony import */ var _modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burgerMenu.js */ "./assets/js/modules/burgerMenu.js");






document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_year_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_goTopButton_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map