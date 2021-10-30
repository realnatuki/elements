/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_modulr/js/alan.js":
/*!****************************!*\
  !*** ./_modulr/js/alan.js ***!
  \****************************/
/***/ (function() {

var d = '<div>Hello Appended</div>';
$('h1').css({
  background: 'orange',
  color: 'black'
}).append("Appended this div with: ".concat(d));

/***/ }),

/***/ "./_modulr/scss/main.scss":
/*!********************************!*\
  !*** ./_modulr/scss/main.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./_modulr/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./_modulr/scss/main.scss");
/* harmony import */ var _js_alan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/alan */ "./_modulr/js/alan.js");
/* harmony import */ var _js_alan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_alan__WEBPACK_IMPORTED_MODULE_1__);

 // $('h1')
//   .css('background', 'blue')
//   .width('300px')
//   .on('mouseenter', (evt) => {
//     $(evt.currentTarget).animate(
//       {
//         width: '500px',
//       },
//       {
//         duration: 300,
//         specialEasing: {
//           width: 'linear',
//           height: 'easeOutBounce',
//         },
//         complete: () => {
//           $(evt.currentTarget).text('another text');
//         },
//       }
//     );
//   })
//   .on('mouseleave', (evt) => {
//     $(evt.currentTarget).animate({
//       width: '300px',
//     });
//   });

var h1 = $('h1');
var text = $('h1').text();
h1.on({
  mouseenter: function mouseenter(evt) {
    $(evt.currentTarget).text('hello world');
  },
  mouseleave: function mouseleave(evt) {
    $(evt.currentTarget).text(text);
  }
});
$('#datepicker').datepicker();
}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map