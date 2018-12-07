/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
// import './utils.js'; // current files directory which is source (lives inside).
 // named exports with default export
// import anything, { square, add } from './utils.js'; // can call default anything as long as you reference it later with the same name
// import subtract from './utils.js'; is also valid if importing a single default statement
console.log('app.js is running');
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* square */](4));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */](100, 23));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* default */](100, 81));

// person.js
// named export isAdult(18) - true if adult , otherwise false
// named export canDrink(21)- true if 21 and over, otherwise false

// import isAdult and canDrink
//use both printing results to the console

// import { isAdult, canDrink } from './person.js';

// console.log(isAdult(21));
// console.log(canDrink(21));



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
console.log('utils.js is running');


const square = (x) => x * x;
/* harmony export (immutable) */ __webpack_exports__["c"] = square;
 // must export a variable declaration inline

const add = (a,b) => a + b;
/* harmony export (immutable) */ __webpack_exports__["a"] = add;


// export{ square, add }; // must individually export variables and functions to avoid polluting the global space // same as above

// exports - default export - named export

// const square = (x) => x * x;
// const add = (a,b) => a + b;
 const subtract = (a, b) => a - b;

// export{ square, add, subtract as default}; // default exports // can only use a single default export
/* harmony default export */ __webpack_exports__["b"] = (subtract);
// export default (a, b) => a - b; //export default subtract: // inline export // default export can use a statement just a single expression


/***/ })
/******/ ]);