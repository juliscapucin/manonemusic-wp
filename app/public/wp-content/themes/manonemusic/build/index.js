/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Credits.js":
/*!********************************!*\
  !*** ./src/modules/Credits.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Credits {
  constructor() {
    ;
    ["load", "init", "addEvents", "removeEvents", "animate"].forEach(fn => this[fn] = this[fn].bind(this));
    this.init();
  }
  async init() {
    await this.load();
    console.log("Website by https://juliscapucin.com");
    this.elements = document.querySelectorAll("a");
    this.addEvents();
  }
  addEvents() {
    // window.addEventListener("load", this.animate)
  }
  removeEvents() {
    window.removeEventListener("load", this.animate);
  }
  animate() {
    gsap.to(this.elements, {
      rotation: 180,
      duration: 2,
      ease: "bounce.out"
    });
    console.log("window loaded");
  }
  load() {
    document.addEventListener("DOMContentLoaded", this.init);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Credits);

/***/ }),

/***/ "./src/modules/HorizontalScroll.js":
/*!*****************************************!*\
  !*** ./src/modules/HorizontalScroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class HorizontalScroll {
  constructor() {
    this.panelsInnerContainer;
    this.panelsOuterContainer;
    this.headerLinks;
    this.panels;
    this.tween;
    this.rafId = null;
    this.load();
  }
  init() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    /* Main navigation */
    this.panelsOuterContainer = document.querySelector("#panels-outer-container");
    this.panelsInnerContainer = document.querySelector("#panels-inner-container");
    this.headerLinks = document.querySelectorAll(".header-link");
    this.panels = gsap.utils.toArray("#panels-inner-container .panel");
    this.addEvents();

    // get root url from wp_localize_script in functions/files.php
    // console.log(siteData.root_url)
  }
  async addEvents() {
    if (!this.panelsInnerContainer || !this.panelsOuterContainer) return;
    await this.handleScroll();
    this.headerLinks.forEach(anchor => {
      anchor.addEventListener("click", this.handleHeaderLinks);
    });
  }
  handleHeaderLinks(e) {
    e.preventDefault();
    let targetId = e.target.closest("a").getAttribute("href");
    let targetElem = document.querySelector(targetId);
    let y = targetElem;
    if (targetElem && this.panelsInnerContainer.isSameNode(targetElem.parentElement)) {
      y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / this.panelsInnerContainer.scrollWidth - innerWidth) * this.totalScroll);
    }
    console.log("useful stuff!", y, e.target.getAttribute("href"));
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  }
  handleScroll() {
    // gsap.to(this.panels, {
    // 	xPercent: -100 * (this.panels.length - 1),
    // 	duration: 3,
    // })

    this.tween = gsap.to(this.panels, {
      xPercent: -100 * (this.panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: this.panelsOuterContainer,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + this.panelsInnerContainer.scrollWidth - innerWidth,
        onUpdate: self => {
          // also useful!
          // console.log(self.progress, '/1')
          // console.log(
          // 	window.scrollY,
          // 	`/${document.body.scrollHeight - window.innerHeight}`
          // )
        }
      }
    });
  }
  load() {
    // wait until DOM is ready
    document.addEventListener("DOMContentLoaded", event => {
      console.log("DOM loaded");

      //wait until images, links, fonts, stylesheets, and js is loaded
      window.addEventListener("load", this.init(), false);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalScroll);

/***/ }),

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".site-header__menu");
    this.openButton = document.querySelector(".site-header__menu-trigger");
    this.events();
  }
  events() {
    if (this.openButton) this.openButton.addEventListener("click", () => this.openMenu());
  }
  openMenu() {
    this.openButton.classList.toggle("fa-bars");
    this.openButton.classList.toggle("fa-window-close");
    this.menu.classList.toggle("site-header__menu--active");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Credits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Credits */ "./src/modules/Credits.js");
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");
/* harmony import */ var _modules_HorizontalScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/HorizontalScroll */ "./src/modules/HorizontalScroll.js");
// import "../css/style.scss"

// Our modules / classes




// Blocks

// Instantiate a new object using our modules/classes
const credits = new _modules_Credits__WEBPACK_IMPORTED_MODULE_0__["default"]();
const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
const horizontalScroll = new _modules_HorizontalScroll__WEBPACK_IMPORTED_MODULE_2__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map