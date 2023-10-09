/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    width: 100vw;
    height: 100vh;
    background-color: rgb(126,126,126);
}

.main .nav {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
}

.main .nav .nav-top{

}

.main .nav .nav-top > h1 {

}

.main .nav .project-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.main .nav .project-list .project-list-detail {
    display: flex;
}

.main .nav .project-list h2 {
    margin-right: auto;
    cursor: pointer;
}

.main .nav .add-project {
    text-align: right;
}

.main .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}


.main .content .content-top{
    display: flex;
}

.main .content .content-top .content-top-info {
    margin-right: auto;
}

.main .content .content-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    padding: 30px;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.main .content .content-main .content-card {
    background-color: lightgreen;
    width: clamp(100px,150px, 200px);
    height: clamp(100px,150px, 200px);
}

.main .content .add-content {
    text-align: right;
}

.modal.new-project {
    display: none;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: blue;
}

.modal.new-project form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal.new-project.active {
    display: block;
}



.modal.edit-project {
    display: none;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: blue;
}

.modal.edit-project form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal.edit-project.active {
    display: block;
}




.modal.new-todo-task {
    display: none;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: blue;
}

.modal.new-todo-task form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal.new-todo-task.active {
    display: block;
}



.modal.edit-todo-task {
    display: none;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: blue;
}

.modal.edit-todo-task form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal.edit-todo-task.active {
    display: block;
}

.overlay {
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
     /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }

.overlay.active {
    display: block;
}


.edit-project, .content-card {
    hover: pointer;
}

.emergency {
    background-color: #222;
    animation-name: color;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
@keyframes color {
  0% {
    background-color: #222;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: #222;
  }
}


.hide {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;IAC5B,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;;;AAKA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe,EAAE,mCAAmC;IACpD,aAAa,EAAE,sBAAsB;IACrC,WAAW,EAAE,sCAAsC;IACnD,YAAY,EAAE,uCAAuC;IACrD,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,iCAAiC,EAAE,kCAAkC;KACpE,oFAAoF;IACrF,eAAe,EAAE,2BAA2B;EAC9C;;AAEF;IACI,cAAc;AAClB;;;AAGA;IACI,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,mCAAmC;EACrC;;AAEF;EACE;IACE,sBAAsB;EACxB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,sBAAsB;EACxB;AACF;;;AAGA;IACI,aAAa;AACjB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(126,126,126);\n}\n\n.main .nav {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding: 20px;\n}\n\n.main .nav .nav-top{\n\n}\n\n.main .nav .nav-top > h1 {\n\n}\n\n.main .nav .project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.main .nav .project-list .project-list-detail {\n    display: flex;\n}\n\n.main .nav .project-list h2 {\n    margin-right: auto;\n    cursor: pointer;\n}\n\n.main .nav .add-project {\n    text-align: right;\n}\n\n.main .content {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n\n.main .content .content-top{\n    display: flex;\n}\n\n.main .content .content-top .content-top-info {\n    margin-right: auto;\n}\n\n.main .content .content-main {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 15px;\n    padding: 30px;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.main .content .content-main .content-card {\n    background-color: lightgreen;\n    width: clamp(100px,150px, 200px);\n    height: clamp(100px,150px, 200px);\n}\n\n.main .content .add-content {\n    text-align: right;\n}\n\n.modal.new-project {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.new-project form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.new-project.active {\n    display: block;\n}\n\n\n\n.modal.edit-project {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.edit-project form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.edit-project.active {\n    display: block;\n}\n\n\n\n\n.modal.new-todo-task {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.new-todo-task form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.new-todo-task.active {\n    display: block;\n}\n\n\n\n.modal.edit-todo-task {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.edit-todo-task form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.edit-todo-task.active {\n    display: block;\n}\n\n.overlay {\n    position: fixed; /* Sit on top of the page content */\n    display: none; /* Hidden by default */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n     /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n\n.overlay.active {\n    display: block;\n}\n\n\n.edit-project, .content-card {\n    hover: pointer;\n}\n\n.emergency {\n    background-color: #222;\n    animation-name: color;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n  }\n  \n@keyframes color {\n  0% {\n    background-color: #222;\n  }\n  50% {\n    background-color: red;\n  }\n  100% {\n    background-color: #222;\n  }\n}\n\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/javascript/current-project.js":
/*!*******************************************!*\
  !*** ./src/javascript/current-project.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentProject)
/* harmony export */ });
function currentProject(array, name){
    for(let i=0; i<array.length; i++){
        if(array[i].projectName === name){
            return array[i];
        }
    }
}

/***/ }),

/***/ "./src/javascript/project-constructor.js":
/*!***********************************************!*\
  !*** ./src/javascript/project-constructor.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(projectName, projectDescription) {
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.todo = [];
    }
}



/***/ }),

/***/ "./src/javascript/push-new-todo-to-project.js":
/*!****************************************************!*\
  !*** ./src/javascript/push-new-todo-to-project.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pushTodoToArrayTodo)
/* harmony export */ });

function pushTodoToArrayTodo(arrayTodo, todo) {
    return arrayTodo.push(todo);
}

/***/ }),

/***/ "./src/javascript/push-project-to-array.js":
/*!*************************************************!*\
  !*** ./src/javascript/push-project-to-array.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pushProjectToArray)
/* harmony export */ });
function pushProjectToArray(array, project) {
    array.push(project);
}

/***/ }),

/***/ "./src/javascript/todo-constructor.js":
/*!********************************************!*\
  !*** ./src/javascript/todo-constructor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(name, desc, dueDate, priority, checkbox){
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkbox = checkbox;
    }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/project-constructor.js */ "./src/javascript/project-constructor.js");
/* harmony import */ var _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/todo-constructor.js */ "./src/javascript/todo-constructor.js");
/* harmony import */ var _javascript_current_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/current-project.js */ "./src/javascript/current-project.js");
/* harmony import */ var _javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/push-project-to-array.js */ "./src/javascript/push-project-to-array.js");
/* harmony import */ var _javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascript/push-new-todo-to-project.js */ "./src/javascript/push-new-todo-to-project.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
//try factory function for the selectedProjectGlobal;









const arrayProject = [];
let selectedProjectGlobal;
let selectedTodoGlobal;


function initializeDOMDisplay(){
    let project1 = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"]('example1','test');
    let project2 = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"]('example2','test2');
    let project3 = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"]('example3','test3');
    (0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(arrayProject, project1);
    (0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(arrayProject, project2);
    (0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(arrayProject, project3);



    let todo1 = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]('test1','test1','2023-07-10','low','1');
    let todo2 = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]('test2','test2','2023-07-13','medium','0');
    let todo3 = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]('test3','test3','2023-10-25','high','1');



    (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrayProject[0].todo, todo1);
    (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrayProject[0].todo, todo2);
    (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrayProject[0].todo, todo3);
    (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrayProject[1].todo, todo1);
    (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrayProject[1].todo, todo2);


    let contentTopProjectName = document.querySelector('.content-top-project-name');
    let contentTopProjectDescription = document.querySelector('.content-top-project-description');
    selectedProjectGlobal = arrayProject[0]; //currentProject State
    contentTopProjectName.textContent = selectedProjectGlobal.projectName;
    contentTopProjectDescription.textContent = selectedProjectGlobal.projectDescription;
    displayArrayTodoDOM(selectedProjectGlobal.todo)
}

hideEditProjectBtnAndAddTodoBtn();
function hideEditProjectBtnAndAddTodoBtn() {
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    if (arrayProject.length === 0) {
        editProjectBtn.classList.add('hide');
        addTodoBtn.classList.add('hide');
    }};
// initializeDOMDisplay();

function showEditProjectBtnAndAddTodoBtn() {
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    editProjectBtn.classList.remove('hide');
    addTodoBtn.classList.remove('hide');
    };

let modalNewProject = document.querySelector('.modal.new-project');
let addNewProjectBtn = document.querySelector('.add-project-button');
let submitNewProjectBtn = document.querySelector('.submit-project-button');
let overlay = document.querySelector('.overlay');
let modalNewTodo = document.querySelector('.modal.new-todo-task');
let addNewTodoBtn = document.querySelector('.add-task');
let submitNewTodoBtn = document.querySelector('.submit-task-button');
let modalEditTodo = document.querySelector('.modal.edit-todo-task');
let modalEditProject = document.querySelector('.modal.edit-project');
let submitEditProjectBtn = document.querySelector('.submit-edit-project-button');

addNewProjectBtn.addEventListener('click', ()=> {
    modalNewProject.classList.add('active');
    overlay.classList.add('active');
})

submitNewProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let newProjectName = document.querySelector('.project-name');
    let newProjectDescription = document.querySelector('.project-description');
    let isProjectExist = arrayProject.some(item => item.projectName === newProjectName.value);
    let contentTopName = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    if(!isProjectExist){
        if(newProjectName.value === ""){
            alert('Please input the name');
        } else {
            let project = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectName.value, newProjectDescription.value);
            (0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(arrayProject, project); 
            selectedProjectGlobal = arrayProject[arrayProject.length-1];
            modalNewProject.classList.remove('active');
            contentTopName.textContent = selectedProjectGlobal.projectName;
            contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
            overlay.classList.remove('active');
            document.querySelector('.new-project-form').reset();
            addNewProjectToNavBarDOM(arrayProject);
            clearArrayTodoDOM();
            showEditProjectBtnAndAddTodoBtn();
        }
    } else {
        alert('Project already exists');
    }
})

addNewTodoBtn.addEventListener('click', ()=> {
    modalNewTodo.classList.add('active');
    overlay.classList.add('active');
})


submitNewTodoBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let newTodoName = document.querySelector('.task-name');
    let newTodoDescription = document.querySelector('.task-description');
    let newTodoDueDate = document.querySelector('.due-date-new-todo');
    let newTodoPriority = document.querySelector('.priority-new-todo');
    let newTodoCheckbox = document.querySelector('.task-checkbox');
    newTodoCheckbox.checked == true ? newTodoCheckbox.value = 1 : newTodoCheckbox.value = 0;
    let isTodoExists = selectedProjectGlobal.todo.some(item => item.name === newTodoName.value);
    if(!isTodoExists) {
        let todo = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"](newTodoName.value, newTodoDescription.value, newTodoDueDate.value, newTodoPriority.value, newTodoCheckbox.value);
        (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(selectedProjectGlobal.todo, todo);
        modalNewTodo.classList.remove('active');
        overlay.classList.remove('active');
        clearArrayTodoDOM();
        document.querySelector('.new-todo-form').reset();
        
        displayArrayTodoDOM(selectedProjectGlobal.todo);
        // selectedProjectGlobal.todo.forEach(todo => {
        //     todoDiv = document.querySelector('.card-content')
        //     changeTodoDOMBackgroundColor(todoDiv, todo.priority)
        // });
        selectedTodoGlobal = todo;
    
    } else {
        alert('Todo already exists, please change Todo Name')
    }
})

//add last element of arrayProject to the DOM
function addNewProjectToNavBarDOM(arrayProject) {
    let projectNavbarDOM = document.querySelector('.project-list');    
    let project = document.createElement('div');
    project.classList.add('project-list-detail');
    let projectName = document.createElement('h2');
    projectName.classList.add('project-title');
    projectName.textContent = arrayProject[arrayProject.length-1].projectName;
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'delete';
    project.append(projectName);
    project.append(deleteBtn);
    projectNavbarDOM.append(project);
}

//function to select todo
function selectTodo(arrayTodo, todoName) {
    for(let i=0; i<arrayTodo.length; i++) {
        if(arrayTodo[i].name === todoName) {
            return arrayTodo[i]
        };
    }
}

//delete todo from array todo function
function deleteTodoFromArrayTodo(project, todoName) {
    let arrayTodo = project.todo
    for(let i=0; i<arrayTodo.length; i++) {
        if(arrayTodo[i].name === todoName) {
            arrayTodo.splice(i,1);
        }
    }
}

//update Project description function
function changeProjectDescription(selectedProject, projectName, projectDescription) {
    selectedProject.projectName = projectName;
    selectedProject.projectDescription = projectDescription;
}

//update ToDo Description function
function changeTodoDescription(selectedTodo, name, desc, dueDate, priority, checkbox){
    selectedTodo.name = name;
    selectedTodo.desc = desc;
    selectedTodo.dueDate = dueDate;
    selectedTodo.priority = priority;
    selectedTodo.checkbox = checkbox;
}


//display arrayTodo to DOM
function displayArrayTodoDOM(arrayTodo) {
    let contentBody = document.querySelector('.content-main')
    for(let i = 0; i < arrayTodo.length; i++) {
        let contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        changeTodoDOMBackgroundColor(contentCard,arrayTodo[i].priority,arrayTodo[i].checkbox);
        let contentCardName = document.createElement('h1');
        contentCardName.classList.add('content-card-info', 'Name');
        contentCardName.textContent = arrayTodo[i].name
        let contentCardDesc = document.createElement('p');
        contentCardDesc.classList.add('content-card-info', 'desc');
        contentCardDesc.textContent = arrayTodo[i].desc;
        let contentCardDueDate = document.createElement('div');
        contentCardDueDate.classList.add('content-card-info', 'due-date');
        contentCardDueDate.textContent = arrayTodo[i].dueDate;
        let contentCardPriority = document.createElement('div');
        contentCardPriority.classList.add('content-card-info', 'priority');
        contentCardPriority.textContent = arrayTodo[i].priority;
        let contentCardCheckBox = document.createElement('div');
        contentCardCheckBox.classList.add('content-card-info', 'checkbox');
        contentCardCheckBox.textContent = arrayTodo[i].checkbox;
        let updateContentCardBtn = document.createElement('button');
        updateContentCardBtn.classList.add('update-content-card-button');
        updateContentCardBtn.textContent = 'update'
        let deleteContentCardBtn = document.createElement('button');
        deleteContentCardBtn.classList.add('delete-content-card-button');
        deleteContentCardBtn.textContent = 'delete'
        contentCard.append(contentCardName);
        contentCard.append(contentCardDesc);
        contentCard.append(contentCardDueDate);
        contentCard.append(contentCardPriority);
        contentCard.append(contentCardCheckBox);
        contentCard.append(updateContentCardBtn);
        contentCard.append(deleteContentCardBtn);
        contentBody.append(contentCard);
    }
}

//update/edit Todo
document.body.addEventListener('click', (event)=> {    
    if(event.target.classList.contains('update-content-card-button')) {
        let editTodoName = document.querySelector('.edit-task-name');
        let editTodoDescription = document.querySelector('.edit-task-description');
        let editTodoDueDate = document.querySelector('.edit-due-date');
        let editTodoPriority = document.querySelector('.edit-priority');
        let editTodoCheckbox = document.querySelector('.edit-task-checkbox');
        let modalEditTodo = document.querySelector('.modal.edit-todo-task');
        modalEditTodo.classList.add('active');
        overlay.classList.add('active');
        let currentNameTodo = event.target.parentNode.firstChild.textContent;
        let selectedTodo = selectTodo(selectedProjectGlobal.todo, currentNameTodo);
        selectedTodoGlobal = selectedTodo;
        editTodoName.value = selectedTodo.name;
        editTodoDescription.value = selectedTodo.desc; 
        editTodoDueDate.value = selectedTodo.dueDate;
        editTodoPriority.value = selectedTodo.priority;
        selectedTodo.checkbox == 1 ? editTodoCheckbox.checked = true : editTodoCheckbox.checked = false;
    }
})


document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('submit-edit-task-button')) {
        event.preventDefault();
        let editTodoName = document.querySelector('.edit-task-name');
        let editTodoDescription = document.querySelector('.edit-task-description');
        let editTodoDueDate = document.querySelector('.edit-due-date');
        let editTodoPriority = document.querySelector('.edit-priority');
        let editTodoCheckbox = document.querySelector('.edit-task-checkbox');
        editTodoCheckbox.checked == true ? editTodoCheckbox.value = 1 : editTodoCheckbox.value = 0;
        let isTodoExists = selectedProjectGlobal.todo.some(item => item.name === editTodoName.value);
        let isSameTodo = selectedTodoGlobal.name === editTodoName.value;
        if(isSameTodo) {
            changeTodoDescription(selectedTodoGlobal, editTodoName.value, editTodoDescription.value, editTodoDueDate.value, editTodoPriority.value, editTodoCheckbox.value);
            clearArrayTodoDOM();
            displayArrayTodoDOM(selectedProjectGlobal.todo);
            modalEditTodo.classList.remove('active');
            overlay.classList.remove('active');
        } else if (!isSameTodo) {
            if(!isTodoExists) {
                changeTodoDescription(selectedTodoGlobal, editTodoName.value, editTodoDescription.value, editTodoDueDate.value, editTodoPriority.value, editTodoCheckbox.value);
                clearTodoDomList();
                displayArrayTodoDOM(selectedProjectGlobal.todo);
                modalEditTodo.classList.remove('active');
                overlay.classList.remove('active');
            } else {
                alert('Todo already exists! Choose another name')
            }
        }
    }  
})

function clearArrayTodoDOM() {
    let contentBody = document.querySelector('.content-main');
    contentBody.innerHTML = "";
}

//for deleting. use window because if a button generated dynamically, the addEventListener wont work.
document.body.addEventListener('click', (event)=> {
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    let contentTopName = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    if(event.target.classList.contains('delete-button')){
        let projectName = event.target.previousElementSibling.textContent
        deleteProject(arrayProject, projectName);
        event.target.parentNode.remove();
        editProjectBtn.classList.add('hide');
        addTodoBtn.classList.add('hide');
        clearArrayTodoDOM();
        contentTopName.textContent = "";
        contentTopDescription.textContent = "";
    }
})

document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('project-title')) {
        let selectedProject = (0,_javascript_current_project_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrayProject, event.target.textContent);
        let selectedArrayTodo = selectedProject.todo;
        let contentTopName = document.querySelector('.content-top-project-name');
        let contentTopDescription = document.querySelector('.content-top-project-description');
        contentTopName.textContent = selectedProject.projectName;
        contentTopDescription.textContent = selectedProject.projectDescription;
        clearArrayTodoDOM();
        displayArrayTodoDOM(selectedArrayTodo);
        selectedProjectGlobal = selectedProject;
    }
    
})



document.body.addEventListener('click',(event)=> {
    
    if(event.target.classList.contains('overlay')){
        modalNewProject.classList.remove('active');
        modalEditProject.classList.remove('active');
        modalNewTodo.classList.remove('active');
        modalEditTodo.classList.remove('active');
        overlay.classList.remove('active');
    }
})


function deleteProject(arrayProject, value) {
    for(let i=0; i<arrayProject.length; i++) {
        if(arrayProject[i].projectName === value){
            arrayProject.splice(i,1);
        }
    }
}


document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-content-card-button')) {
        deleteTodoFromArrayTodo(selectedProjectGlobal, event.target.parentNode.firstChild.textContent);
        event.target.parentNode.remove();
    }
})

document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('edit-project-button')){
        modalEditProject.classList.add('active');
        overlay.classList.add('active');
        let selectedProjectName = selectedProjectGlobal.projectName;
        let selectedProjectDescription = selectedProjectGlobal.projectDescription;
        let editProjectNameArea = document.querySelector('.edit-project-name');
        let editProjectDescriptionArea = document.querySelector('.edit-project-description');
        editProjectNameArea.value = selectedProjectName;
        editProjectDescriptionArea.value = selectedProjectDescription;
    }
})


submitEditProjectBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let projectNavbar = document.querySelector('.project-list');   
    let editProjectNameArea = document.querySelector('.edit-project-name');
    let editProjectDescriptionArea = document.querySelector('.edit-project-description');
    

    let contentTopName = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    let isProjectExist = arrayProject.some(item => item.projectName === editProjectNameArea.value);
    let isSameProject = editProjectNameArea.value === selectedProjectGlobal.projectName;
    if(isSameProject){
        changeProjectDescription(selectedProjectGlobal,editProjectNameArea.value,editProjectDescriptionArea.value);
            projectNavbar.innerHTML = '';
            for(let i=0; i<arrayProject.length; i++) {
                let project = document.createElement('div');
                project.classList.add('project-list-detail');
                let projectName = document.createElement('h2');
                projectName.classList.add('project-title');
                projectName.textContent = arrayProject[i].projectName;
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-button');
                deleteBtn.textContent = 'delete';
                project.append(projectName);
                project.append(deleteBtn);
                projectNavbar.append(project);
            }
        contentTopName.textContent = selectedProjectGlobal.projectName;
        contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
        modalEditProject.classList.remove('active');    
        overlay.classList.remove('active');
    } else if (!isSameProject) {
        if(!isProjectExist){
            if(editProjectNameArea.value === "") {
                alert('Please input project name');
            } else {
                changeProjectDescription(selectedProjectGlobal,editProjectNameArea.value,editProjectDescriptionArea.value);
                projectNavbar.innerHTML = '';
                for(let i=0; i<arrayProject.length; i++) {
                    let project = document.createElement('div');
                    project.classList.add('project-list-detail');
                    let projectName = document.createElement('h2');
                    projectName.classList.add('project-title');
                    projectName.textContent = arrayProject[i].projectName;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-button');
                    deleteBtn.textContent = 'delete';
                    project.append(projectName);
                    project.append(deleteBtn);
                    projectNavbar.append(project);
                }
            }
            contentTopName.textContent = selectedProjectGlobal.projectName;
            contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
            modalEditProject.classList.remove('active');    
            overlay.classList.remove('active');
        } else {
            alert('Project already exists');
        }
    }
})




document.body.addEventListener('click', ()=> {
    console.log(arrayProject);
})

function changeTodoDOMBackgroundColor(element, priority, checkbox) {
    if(checkbox === '1') {
        element.style.backgroundColor = 'darkgrey';
    } else if (checkbox === '0') {
        if(priority === 'low') {
            element.style.backgroundColor = 'green';
        } else if (priority === 'medium') {
            element.style.backgroundColor = 'yellow';
        } else if (priority === 'high') {
            element.style.backgroundColor = 'red';
        } else if (priority === 'emergency') {
            element.style.backgroundColor = 'white';
            element.classList.toggle('emergency');
        }
    }
    
}
console.log(showNextSevenDaysTodo().thisWeekArrayTodo)

function showNextSevenDaysTodo(){
    let thisWeekArrayTodo = [];
    let date = new Date();
    let nextSevenDays = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(date,7);
    arrayProject.forEach(project => {
        project.todo.forEach(todo => {
            // todo.filter(todo.dueDate>nextSevenDays);
            if(new Date(todo.dueDate) > date && new Date(todo.dueDate) < nextSevenDays){
                thisWeekArrayTodo.push(todo);
            }
        })
    });
    return {thisWeekArrayTodo};
}

let showNextSevenDaysTodoBtn = document.querySelector('.next-seven-days-todo-button');
showNextSevenDaysTodoBtn.addEventListener('click',()=>{
    let contentTopProjectName = document.querySelector('.content-top-project-name');
    let contentTopProjectDescription = document.querySelector('.content-top-project-description');
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    contentTopProjectName.textContent = 'Next Seven Days Todo';
    contentTopProjectDescription = "";
    editProjectBtn.classList.add('hide');
    addTodoBtn.classList.add('hide');
    showNextSevenDaysTodo();
    clearArrayTodoDOM();
    displayArrayTodoDOM(showNextSevenDaysTodo().thisWeekArrayTodo);
})


// function testDate(){
//     let date = new Date();
//     let nextSevenDays = addDays(date,7);
//     let dueDateTest = new Date('2023-10-30');
//     console.log(nextSevenDays);
//     console.log(dueDateTest>nextSevenDays)
// }

// testDate();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsV0FBVyxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsb0JBQW9CLHFDQUFxQyxtQkFBbUIsb0JBQW9CLHlDQUF5QyxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixvQkFBb0IsR0FBRyx3QkFBd0IsS0FBSyw4QkFBOEIsS0FBSyw4QkFBOEIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxtREFBbUQsb0JBQW9CLEdBQUcsaUNBQWlDLHlCQUF5QixzQkFBc0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsb0JBQW9CLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGtDQUFrQyxvQkFBb0IsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsa0NBQWtDLG9CQUFvQixrRUFBa0UsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDRCQUE0QixHQUFHLGdEQUFnRCxtQ0FBbUMsdUNBQXVDLHdDQUF3QyxHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyx3QkFBd0Isb0JBQW9CLHNCQUFzQixpQkFBaUIsZUFBZSxnQkFBZ0Isc0NBQXNDLDZCQUE2QixHQUFHLDZCQUE2QixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRywrQkFBK0IscUJBQXFCLEdBQUcsNkJBQTZCLG9CQUFvQixzQkFBc0IsaUJBQWlCLGVBQWUsZ0JBQWdCLHNDQUFzQyw2QkFBNkIsR0FBRyw4QkFBOEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0NBQWdDLHFCQUFxQixHQUFHLGdDQUFnQyxvQkFBb0Isc0JBQXNCLGlCQUFpQixlQUFlLGdCQUFnQixzQ0FBc0MsNkJBQTZCLEdBQUcsK0JBQStCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLGlDQUFpQyxxQkFBcUIsR0FBRywrQkFBK0Isb0JBQW9CLHNCQUFzQixpQkFBaUIsZUFBZSxnQkFBZ0Isc0NBQXNDLDZCQUE2QixHQUFHLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxrQ0FBa0MscUJBQXFCLEdBQUcsY0FBYyx1QkFBdUIseURBQXlELDBDQUEwQywyREFBMkQscURBQXFELGNBQWMsZUFBZSxnQkFBZ0IseUNBQXlDLHNKQUFzSixpQ0FBaUMscUJBQXFCLHFCQUFxQixHQUFHLG9DQUFvQyxxQkFBcUIsR0FBRyxnQkFBZ0IsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsMENBQTBDLEtBQUssd0JBQXdCLFFBQVEsNkJBQTZCLEtBQUssU0FBUyw0QkFBNEIsS0FBSyxVQUFVLDZCQUE2QixLQUFLLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDOWtMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbk8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGVBQWUsbUVBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dEO0FBQ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7O0FBRUE7QUFDQSxrQ0FBa0MsNkVBQU87QUFDekM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSGU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFcUI7QUFDcUM7QUFDTjtBQUNRO0FBQ2tCO0FBQ0g7QUFDMUM7O0FBRWpDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx1QkFBdUIsMEVBQU87QUFDOUIsdUJBQXVCLDBFQUFPO0FBQzlCLHVCQUF1QiwwRUFBTztBQUM5QixJQUFJLGdGQUF5QjtBQUM3QixJQUFJLGdGQUF5QjtBQUM3QixJQUFJLGdGQUF5Qjs7OztBQUk3QixvQkFBb0IsdUVBQUk7QUFDeEIsb0JBQW9CLHVFQUFJO0FBQ3hCLG9CQUFvQix1RUFBSTs7OztBQUl4QixJQUFJLG1GQUFtQjtBQUN2QixJQUFJLG1GQUFtQjtBQUN2QixJQUFJLG1GQUFtQjtBQUN2QixJQUFJLG1GQUFtQjtBQUN2QixJQUFJLG1GQUFtQjs7O0FBR3ZCO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDhCQUE4QiwwRUFBTztBQUNyQyxZQUFZLGdGQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1RUFBSTtBQUMzQixRQUFRLG1GQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4QkFBOEIsMEVBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9qYXZhc2NyaXB0L2N1cnJlbnQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9qYXZhc2NyaXB0L3Byb2plY3QtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC9wdXNoLW5ldy10b2RvLXRvLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC9wdXNoLXByb2plY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC90b2RvLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjYsMTI2LDEyNik7XG59XG5cbi5tYWluIC5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1haW4gLm5hdiAubmF2LXRvcHtcblxufVxuXG4ubWFpbiAubmF2IC5uYXYtdG9wID4gaDEge1xuXG59XG5cbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbn1cblxuLm1haW4gLm5hdiAucHJvamVjdC1saXN0IC5wcm9qZWN0LWxpc3QtZGV0YWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbiAubmF2IC5wcm9qZWN0LWxpc3QgaDIge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluIC5uYXYgLmFkZC1wcm9qZWN0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4gLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcbn1cblxuXG4ubWFpbiAuY29udGVudCAuY29udGVudC10b3B7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4gLmNvbnRlbnQgLmNvbnRlbnQtdG9wIC5jb250ZW50LXRvcC1pbmZvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4gLmNvbnRlbnQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsMTUwcHgsIDIwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LDE1MHB4LCAyMDBweCk7XG59XG5cbi5tYWluIC5jb250ZW50IC5hZGQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2RhbC5uZXctcHJvamVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubW9kYWwubmV3LXByb2plY3QgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbC5uZXctcHJvamVjdC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuLm1vZGFsLmVkaXQtcHJvamVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubW9kYWwuZWRpdC1wcm9qZWN0IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwuZWRpdC1wcm9qZWN0LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuXG5cbi5tb2RhbC5uZXctdG9kby10YXNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5tb2RhbC5uZXctdG9kby10YXNrIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwubmV3LXRvZG8tdGFzay5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuLm1vZGFsLmVkaXQtdG9kby10YXNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5tb2RhbC5lZGl0LXRvZG8tdGFzayBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLmVkaXQtdG9kby10YXNrLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgIC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgfVxuXG4ub3ZlcmxheS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5lZGl0LXByb2plY3QsIC5jb250ZW50LWNhcmQge1xuICAgIGhvdmVyOiBwb2ludGVyO1xufVxuXG4uZW1lcmdlbmN5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjb2xvcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG4gIFxuQGtleWZyYW1lcyBjb2xvciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIH1cbn1cblxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7Ozs7QUFLQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlLEVBQUUsbUNBQW1DO0lBQ3BELGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxZQUFZLEVBQUUsdUNBQXVDO0lBQ3JELE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQ0FBaUMsRUFBRSxrQ0FBa0M7S0FDcEUsb0ZBQW9GO0lBQ3JGLGVBQWUsRUFBRSwyQkFBMkI7RUFDOUM7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQ0FBbUM7RUFDckM7O0FBRUY7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjYsMTI2LDEyNik7XFxufVxcblxcbi5tYWluIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWluIC5uYXYgLm5hdi10b3B7XFxuXFxufVxcblxcbi5tYWluIC5uYXYgLm5hdi10b3AgPiBoMSB7XFxuXFxufVxcblxcbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLm1haW4gLm5hdiAucHJvamVjdC1saXN0IC5wcm9qZWN0LWxpc3QtZGV0YWlsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4gLm5hdiAucHJvamVjdC1saXN0IGgyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluIC5uYXYgLmFkZC1wcm9qZWN0IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5tYWluIC5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5cXG4ubWFpbiAuY29udGVudCAuY29udGVudC10b3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIC5jb250ZW50IC5jb250ZW50LXRvcCAuY29udGVudC10b3AtaW5mbyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm1haW4gLmNvbnRlbnQgLmNvbnRlbnQtbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4gLmNvbnRlbnQtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwxNTBweCwgMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LDE1MHB4LCAyMDBweCk7XFxufVxcblxcbi5tYWluIC5jb250ZW50IC5hZGQtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubW9kYWwubmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tb2RhbC5uZXctcHJvamVjdCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5uZXctcHJvamVjdC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuXFxuLm1vZGFsLmVkaXQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLm1vZGFsLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5lZGl0LXByb2plY3QuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcblxcblxcbi5tb2RhbC5uZXctdG9kby10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubW9kYWwubmV3LXRvZG8tdGFzayBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5uZXctdG9kby10YXNrLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG5cXG4ubW9kYWwuZWRpdC10b2RvLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tb2RhbC5lZGl0LXRvZG8tdGFzayBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5lZGl0LXRvZG8tdGFzay5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cXG4gICAgIC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXFxuICB9XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcbi5lZGl0LXByb2plY3QsIC5jb250ZW50LWNhcmQge1xcbiAgICBob3ZlcjogcG9pbnRlcjtcXG59XFxuXFxuLmVtZXJnZW5jeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjb2xvcjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICB9XFxuICBcXG5Aa2V5ZnJhbWVzIGNvbG9yIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgfVxcbn1cXG5cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbnRQcm9qZWN0KGFycmF5LCBuYW1lKXtcbiAgICBmb3IobGV0IGk9MDsgaTxhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGFycmF5W2ldLnByb2plY3ROYW1lID09PSBuYW1lKXtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudG9kbyA9IFtdO1xuICAgIH1cbn1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdXNoVG9kb1RvQXJyYXlUb2RvKGFycmF5VG9kbywgdG9kbykge1xuICAgIHJldHVybiBhcnJheVRvZG8ucHVzaCh0b2RvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdXNoUHJvamVjdFRvQXJyYXkoYXJyYXksIHByb2plY3QpIHtcbiAgICBhcnJheS5wdXNoKHByb2plY3QpO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2JveCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IGNoZWNrYm94O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vdHJ5IGZhY3RvcnkgZnVuY3Rpb24gZm9yIHRoZSBzZWxlY3RlZFByb2plY3RHbG9iYWw7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9qYXZhc2NyaXB0L3Byb2plY3QtY29uc3RydWN0b3IuanMnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9qYXZhc2NyaXB0L3RvZG8tY29uc3RydWN0b3IuanMnO1xuaW1wb3J0IHNlbGVjdFByb2plY3QgZnJvbSAnLi9qYXZhc2NyaXB0L2N1cnJlbnQtcHJvamVjdC5qcyc7XG5pbXBvcnQgcHVzaFByb2plY3RUb0FycmF5UHJvamVjdCBmcm9tICcuL2phdmFzY3JpcHQvcHVzaC1wcm9qZWN0LXRvLWFycmF5LmpzJztcbmltcG9ydCBwdXNoVG9kb1RvQXJyYXlUb2RvIGZyb20gJy4vamF2YXNjcmlwdC9wdXNoLW5ldy10b2RvLXRvLXByb2plY3QuanMnO1xuaW1wb3J0IHthZGREYXlzfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IGFycmF5UHJvamVjdCA9IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdEdsb2JhbDtcbmxldCBzZWxlY3RlZFRvZG9HbG9iYWw7XG5cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURPTURpc3BsYXkoKXtcbiAgICBsZXQgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgnZXhhbXBsZTEnLCd0ZXN0Jyk7XG4gICAgbGV0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ2V4YW1wbGUyJywndGVzdDInKTtcbiAgICBsZXQgcHJvamVjdDMgPSBuZXcgUHJvamVjdCgnZXhhbXBsZTMnLCd0ZXN0MycpO1xuICAgIHB1c2hQcm9qZWN0VG9BcnJheVByb2plY3QoYXJyYXlQcm9qZWN0LCBwcm9qZWN0MSk7XG4gICAgcHVzaFByb2plY3RUb0FycmF5UHJvamVjdChhcnJheVByb2plY3QsIHByb2plY3QyKTtcbiAgICBwdXNoUHJvamVjdFRvQXJyYXlQcm9qZWN0KGFycmF5UHJvamVjdCwgcHJvamVjdDMpO1xuXG5cblxuICAgIGxldCB0b2RvMSA9IG5ldyBUb2RvKCd0ZXN0MScsJ3Rlc3QxJywnMjAyMy0wNy0xMCcsJ2xvdycsJzEnKTtcbiAgICBsZXQgdG9kbzIgPSBuZXcgVG9kbygndGVzdDInLCd0ZXN0MicsJzIwMjMtMDctMTMnLCdtZWRpdW0nLCcwJyk7XG4gICAgbGV0IHRvZG8zID0gbmV3IFRvZG8oJ3Rlc3QzJywndGVzdDMnLCcyMDIzLTEwLTI1JywnaGlnaCcsJzEnKTtcblxuXG5cbiAgICBwdXNoVG9kb1RvQXJyYXlUb2RvKGFycmF5UHJvamVjdFswXS50b2RvLCB0b2RvMSk7XG4gICAgcHVzaFRvZG9Ub0FycmF5VG9kbyhhcnJheVByb2plY3RbMF0udG9kbywgdG9kbzIpO1xuICAgIHB1c2hUb2RvVG9BcnJheVRvZG8oYXJyYXlQcm9qZWN0WzBdLnRvZG8sIHRvZG8zKTtcbiAgICBwdXNoVG9kb1RvQXJyYXlUb2RvKGFycmF5UHJvamVjdFsxXS50b2RvLCB0b2RvMSk7XG4gICAgcHVzaFRvZG9Ub0FycmF5VG9kbyhhcnJheVByb2plY3RbMV0udG9kbywgdG9kbzIpO1xuXG5cbiAgICBsZXQgY29udGVudFRvcFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtbmFtZScpO1xuICAgIGxldCBjb250ZW50VG9wUHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBzZWxlY3RlZFByb2plY3RHbG9iYWwgPSBhcnJheVByb2plY3RbMF07IC8vY3VycmVudFByb2plY3QgU3RhdGVcbiAgICBjb250ZW50VG9wUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgY29udGVudFRvcFByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgZGlzcGxheUFycmF5VG9kb0RPTShzZWxlY3RlZFByb2plY3RHbG9iYWwudG9kbylcbn1cblxuaGlkZUVkaXRQcm9qZWN0QnRuQW5kQWRkVG9kb0J0bigpO1xuZnVuY3Rpb24gaGlkZUVkaXRQcm9qZWN0QnRuQW5kQWRkVG9kb0J0bigpIHtcbiAgICBsZXQgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGxldCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG4gICAgaWYgKGFycmF5UHJvamVjdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9fTtcbi8vIGluaXRpYWxpemVET01EaXNwbGF5KCk7XG5cbmZ1bmN0aW9uIHNob3dFZGl0UHJvamVjdEJ0bkFuZEFkZFRvZG9CdG4oKSB7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGVkaXRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9O1xuXG5sZXQgbW9kYWxOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLm5ldy1wcm9qZWN0Jyk7XG5sZXQgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idXR0b24nKTtcbmxldCBzdWJtaXROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1wcm9qZWN0LWJ1dHRvbicpO1xubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xubGV0IG1vZGFsTmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5uZXctdG9kby10YXNrJyk7XG5sZXQgYWRkTmV3VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xubGV0IHN1Ym1pdE5ld1RvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2stYnV0dG9uJyk7XG5sZXQgbW9kYWxFZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5lZGl0LXRvZG8tdGFzaycpO1xubGV0IG1vZGFsRWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZWRpdC1wcm9qZWN0Jyk7XG5sZXQgc3VibWl0RWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWVkaXQtcHJvamVjdC1idXR0b24nKTtcblxuYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIG1vZGFsTmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSlcblxuc3VibWl0TmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgbmV3UHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgaXNQcm9qZWN0RXhpc3QgPSBhcnJheVByb2plY3Quc29tZShpdGVtID0+IGl0ZW0ucHJvamVjdE5hbWUgPT09IG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICBsZXQgY29udGVudFRvcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IGNvbnRlbnRUb3BEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgaWYoIWlzUHJvamVjdEV4aXN0KXtcbiAgICAgICAgaWYobmV3UHJvamVjdE5hbWUudmFsdWUgPT09IFwiXCIpe1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCB0aGUgbmFtZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZSwgbmV3UHJvamVjdERlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIHB1c2hQcm9qZWN0VG9BcnJheVByb2plY3QoYXJyYXlQcm9qZWN0LCBwcm9qZWN0KTsgXG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3RHbG9iYWwgPSBhcnJheVByb2plY3RbYXJyYXlQcm9qZWN0Lmxlbmd0aC0xXTtcbiAgICAgICAgICAgIG1vZGFsTmV3UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRUb3BOYW1lLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gICAgICAgICAgICBhZGROZXdQcm9qZWN0VG9OYXZCYXJET00oYXJyYXlQcm9qZWN0KTtcbiAgICAgICAgICAgIGNsZWFyQXJyYXlUb2RvRE9NKCk7XG4gICAgICAgICAgICBzaG93RWRpdFByb2plY3RCdG5BbmRBZGRUb2RvQnRuKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cbn0pXG5cbmFkZE5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBtb2RhbE5ld1RvZG8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pXG5cblxuc3VibWl0TmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmV3VG9kb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgbGV0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IG5ld1RvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLW5ldy10b2RvJyk7XG4gICAgbGV0IG5ld1RvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1uZXctdG9kbycpO1xuICAgIGxldCBuZXdUb2RvQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jaGVja2JveCcpO1xuICAgIG5ld1RvZG9DaGVja2JveC5jaGVja2VkID09IHRydWUgPyBuZXdUb2RvQ2hlY2tib3gudmFsdWUgPSAxIDogbmV3VG9kb0NoZWNrYm94LnZhbHVlID0gMDtcbiAgICBsZXQgaXNUb2RvRXhpc3RzID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8uc29tZShpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmV3VG9kb05hbWUudmFsdWUpO1xuICAgIGlmKCFpc1RvZG9FeGlzdHMpIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyhuZXdUb2RvTmFtZS52YWx1ZSwgbmV3VG9kb0Rlc2NyaXB0aW9uLnZhbHVlLCBuZXdUb2RvRHVlRGF0ZS52YWx1ZSwgbmV3VG9kb1ByaW9yaXR5LnZhbHVlLCBuZXdUb2RvQ2hlY2tib3gudmFsdWUpO1xuICAgICAgICBwdXNoVG9kb1RvQXJyYXlUb2RvKHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvLCB0b2RvKTtcbiAgICAgICAgbW9kYWxOZXdUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBjbGVhckFycmF5VG9kb0RPTSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZm9ybScpLnJlc2V0KCk7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5QXJyYXlUb2RvRE9NKHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvKTtcbiAgICAgICAgLy8gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8uZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgLy8gICAgIHRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250ZW50JylcbiAgICAgICAgLy8gICAgIGNoYW5nZVRvZG9ET01CYWNrZ3JvdW5kQ29sb3IodG9kb0RpdiwgdG9kby5wcmlvcml0eSlcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHNlbGVjdGVkVG9kb0dsb2JhbCA9IHRvZG87XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1RvZG8gYWxyZWFkeSBleGlzdHMsIHBsZWFzZSBjaGFuZ2UgVG9kbyBOYW1lJylcbiAgICB9XG59KVxuXG4vL2FkZCBsYXN0IGVsZW1lbnQgb2YgYXJyYXlQcm9qZWN0IHRvIHRoZSBET01cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb05hdkJhckRPTShhcnJheVByb2plY3QpIHtcbiAgICBsZXQgcHJvamVjdE5hdmJhckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTsgICAgXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGFycmF5UHJvamVjdFthcnJheVByb2plY3QubGVuZ3RoLTFdLnByb2plY3ROYW1lO1xuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgIHByb2plY3QuYXBwZW5kKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0LmFwcGVuZChkZWxldGVCdG4pO1xuICAgIHByb2plY3ROYXZiYXJET00uYXBwZW5kKHByb2plY3QpO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHNlbGVjdCB0b2RvXG5mdW5jdGlvbiBzZWxlY3RUb2RvKGFycmF5VG9kbywgdG9kb05hbWUpIHtcbiAgICBmb3IobGV0IGk9MDsgaTxhcnJheVRvZG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoYXJyYXlUb2RvW2ldLm5hbWUgPT09IHRvZG9OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlUb2RvW2ldXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vL2RlbGV0ZSB0b2RvIGZyb20gYXJyYXkgdG9kbyBmdW5jdGlvblxuZnVuY3Rpb24gZGVsZXRlVG9kb0Zyb21BcnJheVRvZG8ocHJvamVjdCwgdG9kb05hbWUpIHtcbiAgICBsZXQgYXJyYXlUb2RvID0gcHJvamVjdC50b2RvXG4gICAgZm9yKGxldCBpPTA7IGk8YXJyYXlUb2RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFycmF5VG9kb1tpXS5uYW1lID09PSB0b2RvTmFtZSkge1xuICAgICAgICAgICAgYXJyYXlUb2RvLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL3VwZGF0ZSBQcm9qZWN0IGRlc2NyaXB0aW9uIGZ1bmN0aW9uXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0RGVzY3JpcHRpb24oc2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbn1cblxuLy91cGRhdGUgVG9EbyBEZXNjcmlwdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKHNlbGVjdGVkVG9kbywgbmFtZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrYm94KXtcbiAgICBzZWxlY3RlZFRvZG8ubmFtZSA9IG5hbWU7XG4gICAgc2VsZWN0ZWRUb2RvLmRlc2MgPSBkZXNjO1xuICAgIHNlbGVjdGVkVG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBzZWxlY3RlZFRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzZWxlY3RlZFRvZG8uY2hlY2tib3ggPSBjaGVja2JveDtcbn1cblxuXG4vL2Rpc3BsYXkgYXJyYXlUb2RvIHRvIERPTVxuZnVuY3Rpb24gZGlzcGxheUFycmF5VG9kb0RPTShhcnJheVRvZG8pIHtcbiAgICBsZXQgY29udGVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1tYWluJylcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXlUb2RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcbiAgICAgICAgY2hhbmdlVG9kb0RPTUJhY2tncm91bmRDb2xvcihjb250ZW50Q2FyZCxhcnJheVRvZG9baV0ucHJpb3JpdHksYXJyYXlUb2RvW2ldLmNoZWNrYm94KTtcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkTmFtZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdOYW1lJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkTmFtZS50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS5uYW1lXG4gICAgICAgIGxldCBjb250ZW50Q2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdkZXNjJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkRGVzYy50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS5kZXNjO1xuICAgICAgICBsZXQgY29udGVudENhcmREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdkdWUtZGF0ZScpO1xuICAgICAgICBjb250ZW50Q2FyZER1ZURhdGUudGV4dENvbnRlbnQgPSBhcnJheVRvZG9baV0uZHVlRGF0ZTtcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudENhcmRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdwcmlvcml0eScpO1xuICAgICAgICBjb250ZW50Q2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gYXJyYXlUb2RvW2ldLnByaW9yaXR5O1xuICAgICAgICBsZXQgY29udGVudENhcmRDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q2FyZENoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZC1pbmZvJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkQ2hlY2tCb3gudGV4dENvbnRlbnQgPSBhcnJheVRvZG9baV0uY2hlY2tib3g7XG4gICAgICAgIGxldCB1cGRhdGVDb250ZW50Q2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB1cGRhdGVDb250ZW50Q2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCd1cGRhdGUtY29udGVudC1jYXJkLWJ1dHRvbicpO1xuICAgICAgICB1cGRhdGVDb250ZW50Q2FyZEJ0bi50ZXh0Q29udGVudCA9ICd1cGRhdGUnXG4gICAgICAgIGxldCBkZWxldGVDb250ZW50Q2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVDb250ZW50Q2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtY29udGVudC1jYXJkLWJ1dHRvbicpO1xuICAgICAgICBkZWxldGVDb250ZW50Q2FyZEJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnXG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZE5hbWUpO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQoY29udGVudENhcmREZXNjKTtcbiAgICAgICAgY29udGVudENhcmQuYXBwZW5kKGNvbnRlbnRDYXJkRHVlRGF0ZSk7XG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZFByaW9yaXR5KTtcbiAgICAgICAgY29udGVudENhcmQuYXBwZW5kKGNvbnRlbnRDYXJkQ2hlY2tCb3gpO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQodXBkYXRlQ29udGVudENhcmRCdG4pO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQoZGVsZXRlQ29udGVudENhcmRCdG4pO1xuICAgICAgICBjb250ZW50Qm9keS5hcHBlbmQoY29udGVudENhcmQpO1xuICAgIH1cbn1cblxuLy91cGRhdGUvZWRpdCBUb2RvXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHsgICAgXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndXBkYXRlLWNvbnRlbnQtY2FyZC1idXR0b24nKSkge1xuICAgICAgICBsZXQgZWRpdFRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1uYW1lJyk7XG4gICAgICAgIGxldCBlZGl0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZWRpdFRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IGVkaXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcmlvcml0eScpO1xuICAgICAgICBsZXQgZWRpdFRvZG9DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stY2hlY2tib3gnKTtcbiAgICAgICAgbGV0IG1vZGFsRWRpdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZWRpdC10b2RvLXRhc2snKTtcbiAgICAgICAgbW9kYWxFZGl0VG9kby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnROYW1lVG9kbyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBzZWxlY3RlZFRvZG8gPSBzZWxlY3RUb2RvKHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvLCBjdXJyZW50TmFtZVRvZG8pO1xuICAgICAgICBzZWxlY3RlZFRvZG9HbG9iYWwgPSBzZWxlY3RlZFRvZG87XG4gICAgICAgIGVkaXRUb2RvTmFtZS52YWx1ZSA9IHNlbGVjdGVkVG9kby5uYW1lO1xuICAgICAgICBlZGl0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRUb2RvLmRlc2M7IFxuICAgICAgICBlZGl0VG9kb0R1ZURhdGUudmFsdWUgPSBzZWxlY3RlZFRvZG8uZHVlRGF0ZTtcbiAgICAgICAgZWRpdFRvZG9Qcmlvcml0eS52YWx1ZSA9IHNlbGVjdGVkVG9kby5wcmlvcml0eTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmNoZWNrYm94ID09IDEgPyBlZGl0VG9kb0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlIDogZWRpdFRvZG9DaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxufSlcblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0LWVkaXQtdGFzay1idXR0b24nKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZWRpdFRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1uYW1lJyk7XG4gICAgICAgIGxldCBlZGl0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZWRpdFRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IGVkaXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcmlvcml0eScpO1xuICAgICAgICBsZXQgZWRpdFRvZG9DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stY2hlY2tib3gnKTtcbiAgICAgICAgZWRpdFRvZG9DaGVja2JveC5jaGVja2VkID09IHRydWUgPyBlZGl0VG9kb0NoZWNrYm94LnZhbHVlID0gMSA6IGVkaXRUb2RvQ2hlY2tib3gudmFsdWUgPSAwO1xuICAgICAgICBsZXQgaXNUb2RvRXhpc3RzID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8uc29tZShpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZWRpdFRvZG9OYW1lLnZhbHVlKTtcbiAgICAgICAgbGV0IGlzU2FtZVRvZG8gPSBzZWxlY3RlZFRvZG9HbG9iYWwubmFtZSA9PT0gZWRpdFRvZG9OYW1lLnZhbHVlO1xuICAgICAgICBpZihpc1NhbWVUb2RvKSB7XG4gICAgICAgICAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24oc2VsZWN0ZWRUb2RvR2xvYmFsLCBlZGl0VG9kb05hbWUudmFsdWUsIGVkaXRUb2RvRGVzY3JpcHRpb24udmFsdWUsIGVkaXRUb2RvRHVlRGF0ZS52YWx1ZSwgZWRpdFRvZG9Qcmlvcml0eS52YWx1ZSwgZWRpdFRvZG9DaGVja2JveC52YWx1ZSk7XG4gICAgICAgICAgICBjbGVhckFycmF5VG9kb0RPTSgpO1xuICAgICAgICAgICAgZGlzcGxheUFycmF5VG9kb0RPTShzZWxlY3RlZFByb2plY3RHbG9iYWwudG9kbyk7XG4gICAgICAgICAgICBtb2RhbEVkaXRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTYW1lVG9kbykge1xuICAgICAgICAgICAgaWYoIWlzVG9kb0V4aXN0cykge1xuICAgICAgICAgICAgICAgIGNoYW5nZVRvZG9EZXNjcmlwdGlvbihzZWxlY3RlZFRvZG9HbG9iYWwsIGVkaXRUb2RvTmFtZS52YWx1ZSwgZWRpdFRvZG9EZXNjcmlwdGlvbi52YWx1ZSwgZWRpdFRvZG9EdWVEYXRlLnZhbHVlLCBlZGl0VG9kb1ByaW9yaXR5LnZhbHVlLCBlZGl0VG9kb0NoZWNrYm94LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvZG9Eb21MaXN0KCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUFycmF5VG9kb0RPTShzZWxlY3RlZFByb2plY3RHbG9iYWwudG9kbyk7XG4gICAgICAgICAgICAgICAgbW9kYWxFZGl0VG9kby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVG9kbyBhbHJlYWR5IGV4aXN0cyEgQ2hvb3NlIGFub3RoZXIgbmFtZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcbn0pXG5cbmZ1bmN0aW9uIGNsZWFyQXJyYXlUb2RvRE9NKCkge1xuICAgIGxldCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW1haW4nKTtcbiAgICBjb250ZW50Qm9keS5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG4vL2ZvciBkZWxldGluZy4gdXNlIHdpbmRvdyBiZWNhdXNlIGlmIGEgYnV0dG9uIGdlbmVyYXRlZCBkeW5hbWljYWxseSwgdGhlIGFkZEV2ZW50TGlzdGVuZXIgd29udCB3b3JrLlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGxldCBjb250ZW50VG9wTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgY29udGVudFRvcERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnV0dG9uJykpe1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudFxuICAgICAgICBkZWxldGVQcm9qZWN0KGFycmF5UHJvamVjdCwgcHJvamVjdE5hbWUpO1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgY2xlYXJBcnJheVRvZG9ET00oKTtcbiAgICAgICAgY29udGVudFRvcE5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBjb250ZW50VG9wRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cbn0pXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtdGl0bGUnKSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0UHJvamVjdChhcnJheVByb2plY3QsIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEFycmF5VG9kbyA9IHNlbGVjdGVkUHJvamVjdC50b2RvO1xuICAgICAgICBsZXQgY29udGVudFRvcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1uYW1lJyk7XG4gICAgICAgIGxldCBjb250ZW50VG9wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb250ZW50VG9wTmFtZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgY2xlYXJBcnJheVRvZG9ET00oKTtcbiAgICAgICAgZGlzcGxheUFycmF5VG9kb0RPTShzZWxlY3RlZEFycmF5VG9kbyk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdEdsb2JhbCA9IHNlbGVjdGVkUHJvamVjdDtcbiAgICB9XG4gICAgXG59KVxuXG5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+IHtcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5Jykpe1xuICAgICAgICBtb2RhbE5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG1vZGFsRWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG1vZGFsTmV3VG9kby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbW9kYWxFZGl0VG9kby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG59KVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoYXJyYXlQcm9qZWN0LCB2YWx1ZSkge1xuICAgIGZvcihsZXQgaT0wOyBpPGFycmF5UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihhcnJheVByb2plY3RbaV0ucHJvamVjdE5hbWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgIGFycmF5UHJvamVjdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWNvbnRlbnQtY2FyZC1idXR0b24nKSkge1xuICAgICAgICBkZWxldGVUb2RvRnJvbUFycmF5VG9kbyhzZWxlY3RlZFByb2plY3RHbG9iYWwsIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICB9XG59KVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QtYnV0dG9uJykpe1xuICAgICAgICBtb2RhbEVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0TmFtZSA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0TmFtZTtcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvamVjdERlc2NyaXB0aW9uID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0TmFtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0RGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVBcmVhLnZhbHVlID0gc2VsZWN0ZWRQcm9qZWN0TmFtZTtcbiAgICAgICAgZWRpdFByb2plY3REZXNjcmlwdGlvbkFyZWEudmFsdWUgPSBzZWxlY3RlZFByb2plY3REZXNjcmlwdGlvbjtcbiAgICB9XG59KVxuXG5cbnN1Ym1pdEVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwcm9qZWN0TmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpOyAgIFxuICAgIGxldCBlZGl0UHJvamVjdE5hbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IGVkaXRQcm9qZWN0RGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIFxuXG4gICAgbGV0IGNvbnRlbnRUb3BOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtbmFtZScpO1xuICAgIGxldCBjb250ZW50VG9wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBpc1Byb2plY3RFeGlzdCA9IGFycmF5UHJvamVjdC5zb21lKGl0ZW0gPT4gaXRlbS5wcm9qZWN0TmFtZSA9PT0gZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSk7XG4gICAgbGV0IGlzU2FtZVByb2plY3QgPSBlZGl0UHJvamVjdE5hbWVBcmVhLnZhbHVlID09PSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgaWYoaXNTYW1lUHJvamVjdCl7XG4gICAgICAgIGNoYW5nZVByb2plY3REZXNjcmlwdGlvbihzZWxlY3RlZFByb2plY3RHbG9iYWwsZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSxlZGl0UHJvamVjdERlc2NyaXB0aW9uQXJlYS52YWx1ZSk7XG4gICAgICAgICAgICBwcm9qZWN0TmF2YmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8YXJyYXlQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGFycmF5UHJvamVjdFtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmF2YmFyLmFwcGVuZChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY29udGVudFRvcE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnRlbnRUb3BEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIG1vZGFsRWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7ICAgIFxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSBpZiAoIWlzU2FtZVByb2plY3QpIHtcbiAgICAgICAgaWYoIWlzUHJvamVjdEV4aXN0KXtcbiAgICAgICAgICAgIGlmKGVkaXRQcm9qZWN0TmFtZUFyZWEudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHByb2plY3QgbmFtZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VQcm9qZWN0RGVzY3JpcHRpb24oc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLGVkaXRQcm9qZWN0TmFtZUFyZWEudmFsdWUsZWRpdFByb2plY3REZXNjcmlwdGlvbkFyZWEudmFsdWUpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYXZiYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8YXJyYXlQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWRldGFpbCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYXJyYXlQcm9qZWN0W2ldLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYXZiYXIuYXBwZW5kKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRUb3BOYW1lLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIG1vZGFsRWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7ICAgIFxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5cblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgY29uc29sZS5sb2coYXJyYXlQcm9qZWN0KTtcbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZVRvZG9ET01CYWNrZ3JvdW5kQ29sb3IoZWxlbWVudCwgcHJpb3JpdHksIGNoZWNrYm94KSB7XG4gICAgaWYoY2hlY2tib3ggPT09ICcxJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrZ3JleSc7XG4gICAgfSBlbHNlIGlmIChjaGVja2JveCA9PT0gJzAnKSB7XG4gICAgICAgIGlmKHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnZW1lcmdlbmN5Jykge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdlbWVyZ2VuY3knKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbmNvbnNvbGUubG9nKHNob3dOZXh0U2V2ZW5EYXlzVG9kbygpLnRoaXNXZWVrQXJyYXlUb2RvKVxuXG5mdW5jdGlvbiBzaG93TmV4dFNldmVuRGF5c1RvZG8oKXtcbiAgICBsZXQgdGhpc1dlZWtBcnJheVRvZG8gPSBbXTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG5leHRTZXZlbkRheXMgPSBhZGREYXlzKGRhdGUsNyk7XG4gICAgYXJyYXlQcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QudG9kby5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgLy8gdG9kby5maWx0ZXIodG9kby5kdWVEYXRlPm5leHRTZXZlbkRheXMpO1xuICAgICAgICAgICAgaWYobmV3IERhdGUodG9kby5kdWVEYXRlKSA+IGRhdGUgJiYgbmV3IERhdGUodG9kby5kdWVEYXRlKSA8IG5leHRTZXZlbkRheXMpe1xuICAgICAgICAgICAgICAgIHRoaXNXZWVrQXJyYXlUb2RvLnB1c2godG9kbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHt0aGlzV2Vla0FycmF5VG9kb307XG59XG5cbmxldCBzaG93TmV4dFNldmVuRGF5c1RvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1zZXZlbi1kYXlzLXRvZG8tYnV0dG9uJyk7XG5zaG93TmV4dFNldmVuRGF5c1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgbGV0IGNvbnRlbnRUb3BQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgY29udGVudFRvcFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGNvbnRlbnRUb3BQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdOZXh0IFNldmVuIERheXMgVG9kbyc7XG4gICAgY29udGVudFRvcFByb2plY3REZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHNob3dOZXh0U2V2ZW5EYXlzVG9kbygpO1xuICAgIGNsZWFyQXJyYXlUb2RvRE9NKCk7XG4gICAgZGlzcGxheUFycmF5VG9kb0RPTShzaG93TmV4dFNldmVuRGF5c1RvZG8oKS50aGlzV2Vla0FycmF5VG9kbyk7XG59KVxuXG5cbi8vIGZ1bmN0aW9uIHRlc3REYXRlKCl7XG4vLyAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gICAgIGxldCBuZXh0U2V2ZW5EYXlzID0gYWRkRGF5cyhkYXRlLDcpO1xuLy8gICAgIGxldCBkdWVEYXRlVGVzdCA9IG5ldyBEYXRlKCcyMDIzLTEwLTMwJyk7XG4vLyAgICAgY29uc29sZS5sb2cobmV4dFNldmVuRGF5cyk7XG4vLyAgICAgY29uc29sZS5sb2coZHVlRGF0ZVRlc3Q+bmV4dFNldmVuRGF5cylcbi8vIH1cblxuLy8gdGVzdERhdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=