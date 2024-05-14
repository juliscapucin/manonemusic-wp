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
    this.handleHeaderLinks = this.handleHeaderLinks.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
    this.panelsInnerContainer;
    this.panelsOuterContainer;
    this.headerLinks;
    this.panels;
    this.tween;
    this.pathname;
    this.scrollTarget;
    this.panelCoordinates = [{
      section: "home",
      x: 0
    }, {
      section: "projects",
      x: null
    }, {
      section: "releases",
      x: null
    }, {
      section: "about",
      x: null
    }, {
      section: "contact",
      x: null
    }];
    this.load();
  }
  async init() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    console.log("hello from HorizontalScroll.js");

    /* Main navigation */
    this.panelsOuterContainer = document.querySelector("#panels-outer-container");
    this.panelsInnerContainer = document.querySelector("#panels-inner-container");
    this.headerLinks = document.querySelectorAll("header a");
    this.panels = gsap.utils.toArray("#panels-inner-container .panel");
    this.pathname = window.location.pathname;
    this.panelCoordinates.forEach((panel, index) => {
      panel.x = this.panels[index].offsetLeft;
    });
    console.log(this.panelCoordinates);
    await this.handleScroll();
    if (this.pathname !== "/") {
      this.scrollTarget = document.querySelector(`#${this.pathname.replace(/^\/|\/$/g, "")}`);
      this.handleScrollTo();
    }
    this.addEvents();

    // get root url from wp_localize_script in functions/files.php
    // console.log(siteData.root_url)
  }
  addEvents() {
    if (!this.panelsInnerContainer || !this.panelsOuterContainer) return;
    this.headerLinks.forEach(anchor => {
      anchor.addEventListener("click", this.handleHeaderLinks);
    });
  }
  handleHeaderLinks(e) {
    e.preventDefault();
    this.pathname = e.target.closest("a").getAttribute("href").substring(1);
    this.scrollTarget = this.pathname === "/" ? null : document.querySelector(`#${this.pathname}`);
    if (this.scrollTarget) {
      this.handleScrollTo();
    }
  }
  handleScrollTo() {
    let y = this.scrollTarget;
    if (this.scrollTarget && this.panelsInnerContainer.isSameNode(this.scrollTarget.parentElement)) {
      let totalScroll = this.tween.scrollTrigger.end - this.tween.scrollTrigger.start,
        totalMovement = this.panelsInnerContainer.scrollWidth - innerWidth;
      y = Math.round(this.tween.scrollTrigger.start + this.scrollTarget.offsetLeft / totalMovement * totalScroll);
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 0.3,
      onComplete: () => {
        this.handlePathname();
      }
    });
  }
  handlePathname() {
    const {
      protocol,
      hostname,
      port
    } = window.location;
    const newUrl = `${protocol}//${hostname}${port ? ":" + port : ""}/${this.pathname === "home" ? "" : this.pathname}`;
    window.history.pushState({
      path: newUrl
    }, "", newUrl);
  }
  handleScroll() {
    this.tween = gsap.to(this.panels, {
      xPercent: -100 * (this.panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: this.panelsInnerContainer,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + this.panelsInnerContainer.scrollWidth - innerWidth,
        onUpdate: self => {
          // also useful!
          // console.log(self.progress, "/1")
          // console.log(
          // 	window.scrollY,
          // 	`/${document.body.scrollHeight - window.innerHeight}`
          // )
        }
      }
    });
    this.panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        containerAnimation: this.tween,
        start: self => self.direction === 1 ? "right center" : "left center",
        onEnter: () => {
          this.pathname = this.panelCoordinates[index].section;
          this.handlePathname();
        },
        onEnterBack: () => {
          this.pathname = this.panelCoordinates[index].section;
          this.handlePathname();
        }
      });
    });
  }
  load() {
    // wait until DOM is ready
    document.addEventListener("DOMContentLoaded", event => {
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