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
//what i shouldve done to make this better. use form .add event listener so the validator from the input required works. create the function to render dont manually put in every eventlistener. can create EL while createtheelement, so dont have to use document.body and contains. 
//learn about localStorage and date-fns package








let arrayProject;
let selectedProjectGlobal;
let selectedTodoGlobal;

if(localStorage.getItem('arrayProjectStringify') == null){
    arrayProject = [];
} else {
    arrayProject = JSON.parse(window.localStorage.getItem('arrayProjectStringify'));
}

console.log(arrayProject);

initializeDOMDisplay();
function initializeDOMDisplay(){
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    let projectNavbarDOM = document.querySelector('.project-list');  
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
        projectNavbarDOM.append(project);
    };
    

    
    editProjectBtn.classList.add('hide');
    addTodoBtn.classList.add('hide');
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
            saveArrayProjectData();
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
        saveArrayProjectData();
    
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
            saveArrayProjectData();
        } else if (!isSameTodo) {
            if(!isTodoExists) {
                changeTodoDescription(selectedTodoGlobal, editTodoName.value, editTodoDescription.value, editTodoDueDate.value, editTodoPriority.value, editTodoCheckbox.value);
                clearTodoDomList();
                displayArrayTodoDOM(selectedProjectGlobal.todo);
                modalEditTodo.classList.remove('active');
                overlay.classList.remove('active');
                saveArrayProjectData();
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
        saveArrayProjectData();
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
        saveArrayProjectData();
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
        saveArrayProjectData();
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
        saveArrayProjectData();
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
            saveArrayProjectData();
        } else {
            alert('Project already exists');
        }
    }
})




// document.body.addEventListener('click', ()=> {
//     console.log(arrayProject);
// })

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
// console.log(showNextSevenDaysTodo().thisWeekArrayTodo)

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


function saveArrayProjectData(){
    localStorage.setItem('arrayProjectStringify',JSON.stringify(arrayProject));
}

document.body.addEventListener('click', ()=> {
    console.log(localStorage.getItem('arrayProjectStringify'))
    // console.log(arrayProject);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsV0FBVyxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsb0JBQW9CLHFDQUFxQyxtQkFBbUIsb0JBQW9CLHlDQUF5QyxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixvQkFBb0IsR0FBRyx3QkFBd0IsS0FBSyw4QkFBOEIsS0FBSyw4QkFBOEIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxtREFBbUQsb0JBQW9CLEdBQUcsaUNBQWlDLHlCQUF5QixzQkFBc0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsb0JBQW9CLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGtDQUFrQyxvQkFBb0IsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsa0NBQWtDLG9CQUFvQixrRUFBa0UsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDRCQUE0QixHQUFHLGdEQUFnRCxtQ0FBbUMsdUNBQXVDLHdDQUF3QyxHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyx3QkFBd0Isb0JBQW9CLHNCQUFzQixpQkFBaUIsZUFBZSxnQkFBZ0Isc0NBQXNDLDZCQUE2QixHQUFHLDZCQUE2QixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRywrQkFBK0IscUJBQXFCLEdBQUcsNkJBQTZCLG9CQUFvQixzQkFBc0IsaUJBQWlCLGVBQWUsZ0JBQWdCLHNDQUFzQyw2QkFBNkIsR0FBRyw4QkFBOEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0NBQWdDLHFCQUFxQixHQUFHLGdDQUFnQyxvQkFBb0Isc0JBQXNCLGlCQUFpQixlQUFlLGdCQUFnQixzQ0FBc0MsNkJBQTZCLEdBQUcsK0JBQStCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLGlDQUFpQyxxQkFBcUIsR0FBRywrQkFBK0Isb0JBQW9CLHNCQUFzQixpQkFBaUIsZUFBZSxnQkFBZ0Isc0NBQXNDLDZCQUE2QixHQUFHLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxrQ0FBa0MscUJBQXFCLEdBQUcsY0FBYyx1QkFBdUIseURBQXlELDBDQUEwQywyREFBMkQscURBQXFELGNBQWMsZUFBZSxnQkFBZ0IseUNBQXlDLHNKQUFzSixpQ0FBaUMscUJBQXFCLHFCQUFxQixHQUFHLG9DQUFvQyxxQkFBcUIsR0FBRyxnQkFBZ0IsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsMENBQTBDLEtBQUssd0JBQXdCLFFBQVEsNkJBQTZCLEtBQUssU0FBUyw0QkFBNEIsS0FBSyxVQUFVLDZCQUE2QixLQUFLLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDOWtMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbk8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGVBQWUsbUVBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dEO0FBQ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7O0FBRUE7QUFDQSxrQ0FBa0MsNkVBQU87QUFDekM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSGU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDcUI7QUFDcUM7QUFDTjtBQUNRO0FBQ2tCO0FBQ0g7QUFDMUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDhCQUE4QiwwRUFBTztBQUNyQyxZQUFZLGdGQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVFQUFJO0FBQzNCLFFBQVEsbUZBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCLDBFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC9jdXJyZW50LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC9wcm9qZWN0LWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2phdmFzY3JpcHQvcHVzaC1uZXctdG9kby10by1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2phdmFzY3JpcHQvcHVzaC1wcm9qZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2phdmFzY3JpcHQvdG9kby1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LDEyNiwxMjYpO1xufVxuXG4ubWFpbiAubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWluIC5uYXYgLm5hdi10b3B7XG5cbn1cblxuLm1haW4gLm5hdiAubmF2LXRvcCA+IGgxIHtcblxufVxuXG4ubWFpbiAubmF2IC5wcm9qZWN0LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCAucHJvamVjdC1saXN0LWRldGFpbCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4gLm5hdiAucHJvamVjdC1saXN0IGgyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbiAubmF2IC5hZGQtcHJvamVjdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYWluIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG59XG5cblxuLm1haW4gLmNvbnRlbnQgLmNvbnRlbnQtdG9we1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluIC5jb250ZW50IC5jb250ZW50LXRvcCAuY29udGVudC10b3AtaW5mbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbiAuY29udGVudCAuY29udGVudC1tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbiAuY29udGVudCAuY29udGVudC1tYWluIC5jb250ZW50LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgd2lkdGg6IGNsYW1wKDEwMHB4LDE1MHB4LCAyMDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwxNTBweCwgMjAwcHgpO1xufVxuXG4ubWFpbiAuY29udGVudCAuYWRkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubW9kYWwubmV3LXByb2plY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLm1vZGFsLm5ldy1wcm9qZWN0IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwubmV3LXByb2plY3QuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5cbi5tb2RhbC5lZGl0LXByb2plY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLm1vZGFsLmVkaXQtcHJvamVjdCBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLmVkaXQtcHJvamVjdC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuXG4ubW9kYWwubmV3LXRvZG8tdGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubW9kYWwubmV3LXRvZG8tdGFzayBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLm5ldy10b2RvLXRhc2suYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5cbi5tb2RhbC5lZGl0LXRvZG8tdGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubW9kYWwuZWRpdC10b2RvLXRhc2sgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbC5lZGl0LXRvZG8tdGFzay5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgICAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG4gIH1cblxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uZWRpdC1wcm9qZWN0LCAuY29udGVudC1jYXJkIHtcbiAgICBob3ZlcjogcG9pbnRlcjtcbn1cblxuLmVtZXJnZW5jeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBhbmltYXRpb24tbmFtZTogY29sb3I7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuICBcbkBrZXlmcmFtZXMgY29sb3Ige1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICB9XG59XG5cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLFdBQVcsRUFBRSxzQ0FBc0M7SUFDbkQsWUFBWSxFQUFFLHVDQUF1QztJQUNyRCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUNBQWlDLEVBQUUsa0NBQWtDO0tBQ3BFLG9GQUFvRjtJQUNyRixlQUFlLEVBQUUsMkJBQTJCO0VBQzlDOztBQUVGO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsbUNBQW1DO0VBQ3JDOztBQUVGO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LDEyNiwxMjYpO1xcbn1cXG5cXG4ubWFpbiAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubWFpbiAubmF2IC5uYXYtdG9we1xcblxcbn1cXG5cXG4ubWFpbiAubmF2IC5uYXYtdG9wID4gaDEge1xcblxcbn1cXG5cXG4ubWFpbiAubmF2IC5wcm9qZWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCAucHJvamVjdC1saXN0LWRldGFpbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCBoMiB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbiAubmF2IC5hZGQtcHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuXFxuLm1haW4gLmNvbnRlbnQgLmNvbnRlbnQtdG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCAuY29udGVudC10b3AgLmNvbnRlbnQtdG9wLWluZm8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCAuY29udGVudC1tYWluIC5jb250ZW50LWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsMTUwcHgsIDIwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwxNTBweCwgMjAwcHgpO1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCAuYWRkLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm1vZGFsLm5ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubW9kYWwubmV3LXByb2plY3QgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwubmV3LXByb2plY3QuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcblxcbi5tb2RhbC5lZGl0LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tb2RhbC5lZGl0LXByb2plY3QgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwuZWRpdC1wcm9qZWN0LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG5cXG5cXG4ubW9kYWwubmV3LXRvZG8tdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLm1vZGFsLm5ldy10b2RvLXRhc2sgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwubmV3LXRvZG8tdGFzay5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuXFxuLm1vZGFsLmVkaXQtdG9kby10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubW9kYWwuZWRpdC10b2RvLXRhc2sgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwuZWRpdC10b2RvLXRhc2suYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXFxuICAgICAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xcbiAgfVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG4uZWRpdC1wcm9qZWN0LCAuY29udGVudC1jYXJkIHtcXG4gICAgaG92ZXI6IHBvaW50ZXI7XFxufVxcblxcbi5lbWVyZ2VuY3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgICBhbmltYXRpb24tbmFtZTogY29sb3I7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgfVxcbiAgXFxuQGtleWZyYW1lcyBjb2xvciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gIH1cXG59XFxuXFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyZW50UHJvamVjdChhcnJheSwgbmFtZSl7XG4gICAgZm9yKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihhcnJheVtpXS5wcm9qZWN0TmFtZSA9PT0gbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVzaFRvZG9Ub0FycmF5VG9kbyhhcnJheVRvZG8sIHRvZG8pIHtcbiAgICByZXR1cm4gYXJyYXlUb2RvLnB1c2godG9kbyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVzaFByb2plY3RUb0FycmF5KGFycmF5LCBwcm9qZWN0KSB7XG4gICAgYXJyYXkucHVzaChwcm9qZWN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tib3gpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSBjaGVja2JveDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL3RyeSBmYWN0b3J5IGZ1bmN0aW9uIGZvciB0aGUgc2VsZWN0ZWRQcm9qZWN0R2xvYmFsO1xuLy93aGF0IGkgc2hvdWxkdmUgZG9uZSB0byBtYWtlIHRoaXMgYmV0dGVyLiB1c2UgZm9ybSAuYWRkIGV2ZW50IGxpc3RlbmVyIHNvIHRoZSB2YWxpZGF0b3IgZnJvbSB0aGUgaW5wdXQgcmVxdWlyZWQgd29ya3MuIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdG8gcmVuZGVyIGRvbnQgbWFudWFsbHkgcHV0IGluIGV2ZXJ5IGV2ZW50bGlzdGVuZXIuIGNhbiBjcmVhdGUgRUwgd2hpbGUgY3JlYXRldGhlZWxlbWVudCwgc28gZG9udCBoYXZlIHRvIHVzZSBkb2N1bWVudC5ib2R5IGFuZCBjb250YWlucy4gXG4vL2xlYXJuIGFib3V0IGxvY2FsU3RvcmFnZSBhbmQgZGF0ZS1mbnMgcGFja2FnZVxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL2phdmFzY3JpcHQvcHJvamVjdC1jb25zdHJ1Y3Rvci5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL2phdmFzY3JpcHQvdG9kby1jb25zdHJ1Y3Rvci5qcyc7XG5pbXBvcnQgc2VsZWN0UHJvamVjdCBmcm9tICcuL2phdmFzY3JpcHQvY3VycmVudC1wcm9qZWN0LmpzJztcbmltcG9ydCBwdXNoUHJvamVjdFRvQXJyYXlQcm9qZWN0IGZyb20gJy4vamF2YXNjcmlwdC9wdXNoLXByb2plY3QtdG8tYXJyYXkuanMnO1xuaW1wb3J0IHB1c2hUb2RvVG9BcnJheVRvZG8gZnJvbSAnLi9qYXZhc2NyaXB0L3B1c2gtbmV3LXRvZG8tdG8tcHJvamVjdC5qcyc7XG5pbXBvcnQge2FkZERheXN9IGZyb20gJ2RhdGUtZm5zJztcblxubGV0IGFycmF5UHJvamVjdDtcbmxldCBzZWxlY3RlZFByb2plY3RHbG9iYWw7XG5sZXQgc2VsZWN0ZWRUb2RvR2xvYmFsO1xuXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXlQcm9qZWN0U3RyaW5naWZ5JykgPT0gbnVsbCl7XG4gICAgYXJyYXlQcm9qZWN0ID0gW107XG59IGVsc2Uge1xuICAgIGFycmF5UHJvamVjdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVByb2plY3RTdHJpbmdpZnknKSk7XG59XG5cbmNvbnNvbGUubG9nKGFycmF5UHJvamVjdCk7XG5cbmluaXRpYWxpemVET01EaXNwbGF5KCk7XG5mdW5jdGlvbiBpbml0aWFsaXplRE9NRGlzcGxheSgpe1xuICAgIGxldCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtYnV0dG9uJyk7XG4gICAgbGV0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBsZXQgcHJvamVjdE5hdmJhckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTsgIFxuICAgIGZvcihsZXQgaT0wOyBpPGFycmF5UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGFycmF5UHJvamVjdFtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICAgICAgcHJvamVjdC5hcHBlbmQocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZChkZWxldGVCdG4pO1xuICAgICAgICBwcm9qZWN0TmF2YmFyRE9NLmFwcGVuZChwcm9qZWN0KTtcbiAgICB9O1xuICAgIFxuXG4gICAgXG4gICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xufVxuXG5oaWRlRWRpdFByb2plY3RCdG5BbmRBZGRUb2RvQnRuKCk7XG5mdW5jdGlvbiBoaWRlRWRpdFByb2plY3RCdG5BbmRBZGRUb2RvQnRuKCkge1xuICAgIGxldCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtYnV0dG9uJyk7XG4gICAgbGV0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBpZiAoYXJyYXlQcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBlZGl0UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH19O1xuLy8gaW5pdGlhbGl6ZURPTURpc3BsYXkoKTtcblxuZnVuY3Rpb24gc2hvd0VkaXRQcm9qZWN0QnRuQW5kQWRkVG9kb0J0bigpIHtcbiAgICBsZXQgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGxldCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG4gICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH07XG5cbmxldCBtb2RhbE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwubmV3LXByb2plY3QnKTtcbmxldCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ1dHRvbicpO1xubGV0IHN1Ym1pdE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXByb2plY3QtYnV0dG9uJyk7XG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5sZXQgbW9kYWxOZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLm5ldy10b2RvLXRhc2snKTtcbmxldCBhZGROZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG5sZXQgc3VibWl0TmV3VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzay1idXR0b24nKTtcbmxldCBtb2RhbEVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLmVkaXQtdG9kby10YXNrJyk7XG5sZXQgbW9kYWxFZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5lZGl0LXByb2plY3QnKTtcbmxldCBzdWJtaXRFZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuXG5hZGROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgbW9kYWxOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KVxuXG5zdWJtaXROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICAgIGxldCBuZXdQcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBpc1Byb2plY3RFeGlzdCA9IGFycmF5UHJvamVjdC5zb21lKGl0ZW0gPT4gaXRlbS5wcm9qZWN0TmFtZSA9PT0gbmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgIGxldCBjb250ZW50VG9wTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgY29udGVudFRvcERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBpZighaXNQcm9qZWN0RXhpc3Qpe1xuICAgICAgICBpZihuZXdQcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHRoZSBuYW1lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlLCBuZXdQcm9qZWN0RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgcHVzaFByb2plY3RUb0FycmF5UHJvamVjdChhcnJheVByb2plY3QsIHByb2plY3QpOyBcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdEdsb2JhbCA9IGFycmF5UHJvamVjdFthcnJheVByb2plY3QubGVuZ3RoLTFdO1xuICAgICAgICAgICAgbW9kYWxOZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29udGVudFRvcE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgICAgICAgICBjb250ZW50VG9wRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgICAgICAgICAgIGFkZE5ld1Byb2plY3RUb05hdkJhckRPTShhcnJheVByb2plY3QpO1xuICAgICAgICAgICAgY2xlYXJBcnJheVRvZG9ET00oKTtcbiAgICAgICAgICAgIHNob3dFZGl0UHJvamVjdEJ0bkFuZEFkZFRvZG9CdG4oKTtcbiAgICAgICAgICAgIHNhdmVBcnJheVByb2plY3REYXRhKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cbn0pXG5cbmFkZE5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBtb2RhbE5ld1RvZG8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pXG5cblxuc3VibWl0TmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmV3VG9kb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgbGV0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IG5ld1RvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLW5ldy10b2RvJyk7XG4gICAgbGV0IG5ld1RvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1uZXctdG9kbycpO1xuICAgIGxldCBuZXdUb2RvQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jaGVja2JveCcpO1xuICAgIG5ld1RvZG9DaGVja2JveC5jaGVja2VkID09IHRydWUgPyBuZXdUb2RvQ2hlY2tib3gudmFsdWUgPSAxIDogbmV3VG9kb0NoZWNrYm94LnZhbHVlID0gMDtcbiAgICBsZXQgaXNUb2RvRXhpc3RzID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8uc29tZShpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmV3VG9kb05hbWUudmFsdWUpO1xuICAgIGlmKCFpc1RvZG9FeGlzdHMpIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyhuZXdUb2RvTmFtZS52YWx1ZSwgbmV3VG9kb0Rlc2NyaXB0aW9uLnZhbHVlLCBuZXdUb2RvRHVlRGF0ZS52YWx1ZSwgbmV3VG9kb1ByaW9yaXR5LnZhbHVlLCBuZXdUb2RvQ2hlY2tib3gudmFsdWUpO1xuICAgICAgICBwdXNoVG9kb1RvQXJyYXlUb2RvKHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvLCB0b2RvKTtcbiAgICAgICAgbW9kYWxOZXdUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBjbGVhckFycmF5VG9kb0RPTSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZm9ybScpLnJlc2V0KCk7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5QXJyYXlUb2RvRE9NKHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvKTtcbiAgICAgICAgLy8gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8uZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgLy8gICAgIHRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250ZW50JylcbiAgICAgICAgLy8gICAgIGNoYW5nZVRvZG9ET01CYWNrZ3JvdW5kQ29sb3IodG9kb0RpdiwgdG9kby5wcmlvcml0eSlcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHNlbGVjdGVkVG9kb0dsb2JhbCA9IHRvZG87XG4gICAgICAgIHNhdmVBcnJheVByb2plY3REYXRhKCk7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1RvZG8gYWxyZWFkeSBleGlzdHMsIHBsZWFzZSBjaGFuZ2UgVG9kbyBOYW1lJylcbiAgICB9XG59KVxuXG4vL2FkZCBsYXN0IGVsZW1lbnQgb2YgYXJyYXlQcm9qZWN0IHRvIHRoZSBET01cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb05hdkJhckRPTShhcnJheVByb2plY3QpIHtcbiAgICBsZXQgcHJvamVjdE5hdmJhckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTsgICAgXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGFycmF5UHJvamVjdFthcnJheVByb2plY3QubGVuZ3RoLTFdLnByb2plY3ROYW1lO1xuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgIHByb2plY3QuYXBwZW5kKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0LmFwcGVuZChkZWxldGVCdG4pO1xuICAgIHByb2plY3ROYXZiYXJET00uYXBwZW5kKHByb2plY3QpO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHNlbGVjdCB0b2RvXG5mdW5jdGlvbiBzZWxlY3RUb2RvKGFycmF5VG9kbywgdG9kb05hbWUpIHtcbiAgICBmb3IobGV0IGk9MDsgaTxhcnJheVRvZG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoYXJyYXlUb2RvW2ldLm5hbWUgPT09IHRvZG9OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlUb2RvW2ldXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vL2RlbGV0ZSB0b2RvIGZyb20gYXJyYXkgdG9kbyBmdW5jdGlvblxuZnVuY3Rpb24gZGVsZXRlVG9kb0Zyb21BcnJheVRvZG8ocHJvamVjdCwgdG9kb05hbWUpIHtcbiAgICBsZXQgYXJyYXlUb2RvID0gcHJvamVjdC50b2RvXG4gICAgZm9yKGxldCBpPTA7IGk8YXJyYXlUb2RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFycmF5VG9kb1tpXS5uYW1lID09PSB0b2RvTmFtZSkge1xuICAgICAgICAgICAgYXJyYXlUb2RvLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL3VwZGF0ZSBQcm9qZWN0IGRlc2NyaXB0aW9uIGZ1bmN0aW9uXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0RGVzY3JpcHRpb24oc2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbn1cblxuLy91cGRhdGUgVG9EbyBEZXNjcmlwdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKHNlbGVjdGVkVG9kbywgbmFtZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrYm94KXtcbiAgICBzZWxlY3RlZFRvZG8ubmFtZSA9IG5hbWU7XG4gICAgc2VsZWN0ZWRUb2RvLmRlc2MgPSBkZXNjO1xuICAgIHNlbGVjdGVkVG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBzZWxlY3RlZFRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzZWxlY3RlZFRvZG8uY2hlY2tib3ggPSBjaGVja2JveDtcbn1cblxuXG4vL2Rpc3BsYXkgYXJyYXlUb2RvIHRvIERPTVxuZnVuY3Rpb24gZGlzcGxheUFycmF5VG9kb0RPTShhcnJheVRvZG8pIHtcbiAgICBsZXQgY29udGVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1tYWluJylcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXlUb2RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcbiAgICAgICAgY2hhbmdlVG9kb0RPTUJhY2tncm91bmRDb2xvcihjb250ZW50Q2FyZCxhcnJheVRvZG9baV0ucHJpb3JpdHksYXJyYXlUb2RvW2ldLmNoZWNrYm94KTtcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkTmFtZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdOYW1lJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkTmFtZS50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS5uYW1lXG4gICAgICAgIGxldCBjb250ZW50Q2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdkZXNjJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkRGVzYy50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS5kZXNjO1xuICAgICAgICBsZXQgY29udGVudENhcmREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdkdWUtZGF0ZScpO1xuICAgICAgICBjb250ZW50Q2FyZER1ZURhdGUudGV4dENvbnRlbnQgPSBhcnJheVRvZG9baV0uZHVlRGF0ZTtcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudENhcmRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQtaW5mbycsICdwcmlvcml0eScpO1xuICAgICAgICBjb250ZW50Q2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gYXJyYXlUb2RvW2ldLnByaW9yaXR5O1xuICAgICAgICBsZXQgY29udGVudENhcmRDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q2FyZENoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZC1pbmZvJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkQ2hlY2tCb3gudGV4dENvbnRlbnQgPSBhcnJheVRvZG9baV0uY2hlY2tib3g7XG4gICAgICAgIGxldCB1cGRhdGVDb250ZW50Q2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB1cGRhdGVDb250ZW50Q2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCd1cGRhdGUtY29udGVudC1jYXJkLWJ1dHRvbicpO1xuICAgICAgICB1cGRhdGVDb250ZW50Q2FyZEJ0bi50ZXh0Q29udGVudCA9ICd1cGRhdGUnXG4gICAgICAgIGxldCBkZWxldGVDb250ZW50Q2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVDb250ZW50Q2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtY29udGVudC1jYXJkLWJ1dHRvbicpO1xuICAgICAgICBkZWxldGVDb250ZW50Q2FyZEJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnXG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZE5hbWUpO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQoY29udGVudENhcmREZXNjKTtcbiAgICAgICAgY29udGVudENhcmQuYXBwZW5kKGNvbnRlbnRDYXJkRHVlRGF0ZSk7XG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZFByaW9yaXR5KTtcbiAgICAgICAgY29udGVudENhcmQuYXBwZW5kKGNvbnRlbnRDYXJkQ2hlY2tCb3gpO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQodXBkYXRlQ29udGVudENhcmRCdG4pO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQoZGVsZXRlQ29udGVudENhcmRCdG4pO1xuICAgICAgICBjb250ZW50Qm9keS5hcHBlbmQoY29udGVudENhcmQpO1xuICAgIH1cbn1cblxuLy91cGRhdGUvZWRpdCBUb2RvXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHsgICAgXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndXBkYXRlLWNvbnRlbnQtY2FyZC1idXR0b24nKSkge1xuICAgICAgICBsZXQgZWRpdFRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1uYW1lJyk7XG4gICAgICAgIGxldCBlZGl0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZWRpdFRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IGVkaXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcmlvcml0eScpO1xuICAgICAgICBsZXQgZWRpdFRvZG9DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stY2hlY2tib3gnKTtcbiAgICAgICAgbGV0IG1vZGFsRWRpdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZWRpdC10b2RvLXRhc2snKTtcbiAgICAgICAgbW9kYWxFZGl0VG9kby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnROYW1lVG9kbyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBzZWxlY3RlZFRvZG8gPSBzZWxlY3RUb2RvKHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvLCBjdXJyZW50TmFtZVRvZG8pO1xuICAgICAgICBzZWxlY3RlZFRvZG9HbG9iYWwgPSBzZWxlY3RlZFRvZG87XG4gICAgICAgIGVkaXRUb2RvTmFtZS52YWx1ZSA9IHNlbGVjdGVkVG9kby5uYW1lO1xuICAgICAgICBlZGl0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRUb2RvLmRlc2M7IFxuICAgICAgICBlZGl0VG9kb0R1ZURhdGUudmFsdWUgPSBzZWxlY3RlZFRvZG8uZHVlRGF0ZTtcbiAgICAgICAgZWRpdFRvZG9Qcmlvcml0eS52YWx1ZSA9IHNlbGVjdGVkVG9kby5wcmlvcml0eTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmNoZWNrYm94ID09IDEgPyBlZGl0VG9kb0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlIDogZWRpdFRvZG9DaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxufSlcblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0LWVkaXQtdGFzay1idXR0b24nKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZWRpdFRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1uYW1lJyk7XG4gICAgICAgIGxldCBlZGl0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZWRpdFRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IGVkaXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcmlvcml0eScpO1xuICAgICAgICBsZXQgZWRpdFRvZG9DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stY2hlY2tib3gnKTtcbiAgICAgICAgZWRpdFRvZG9DaGVja2JveC5jaGVja2VkID09IHRydWUgPyBlZGl0VG9kb0NoZWNrYm94LnZhbHVlID0gMSA6IGVkaXRUb2RvQ2hlY2tib3gudmFsdWUgPSAwO1xuICAgICAgICBsZXQgaXNUb2RvRXhpc3RzID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8uc29tZShpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZWRpdFRvZG9OYW1lLnZhbHVlKTtcbiAgICAgICAgbGV0IGlzU2FtZVRvZG8gPSBzZWxlY3RlZFRvZG9HbG9iYWwubmFtZSA9PT0gZWRpdFRvZG9OYW1lLnZhbHVlO1xuICAgICAgICBpZihpc1NhbWVUb2RvKSB7XG4gICAgICAgICAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24oc2VsZWN0ZWRUb2RvR2xvYmFsLCBlZGl0VG9kb05hbWUudmFsdWUsIGVkaXRUb2RvRGVzY3JpcHRpb24udmFsdWUsIGVkaXRUb2RvRHVlRGF0ZS52YWx1ZSwgZWRpdFRvZG9Qcmlvcml0eS52YWx1ZSwgZWRpdFRvZG9DaGVja2JveC52YWx1ZSk7XG4gICAgICAgICAgICBjbGVhckFycmF5VG9kb0RPTSgpO1xuICAgICAgICAgICAgZGlzcGxheUFycmF5VG9kb0RPTShzZWxlY3RlZFByb2plY3RHbG9iYWwudG9kbyk7XG4gICAgICAgICAgICBtb2RhbEVkaXRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNhdmVBcnJheVByb2plY3REYXRhKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU2FtZVRvZG8pIHtcbiAgICAgICAgICAgIGlmKCFpc1RvZG9FeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24oc2VsZWN0ZWRUb2RvR2xvYmFsLCBlZGl0VG9kb05hbWUudmFsdWUsIGVkaXRUb2RvRGVzY3JpcHRpb24udmFsdWUsIGVkaXRUb2RvRHVlRGF0ZS52YWx1ZSwgZWRpdFRvZG9Qcmlvcml0eS52YWx1ZSwgZWRpdFRvZG9DaGVja2JveC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUb2RvRG9tTGlzdCgpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJheVRvZG9ET00oc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8pO1xuICAgICAgICAgICAgICAgIG1vZGFsRWRpdFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzYXZlQXJyYXlQcm9qZWN0RGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVG9kbyBhbHJlYWR5IGV4aXN0cyEgQ2hvb3NlIGFub3RoZXIgbmFtZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcbn0pXG5cbmZ1bmN0aW9uIGNsZWFyQXJyYXlUb2RvRE9NKCkge1xuICAgIGxldCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW1haW4nKTtcbiAgICBjb250ZW50Qm9keS5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG4vL2ZvciBkZWxldGluZy4gdXNlIHdpbmRvdyBiZWNhdXNlIGlmIGEgYnV0dG9uIGdlbmVyYXRlZCBkeW5hbWljYWxseSwgdGhlIGFkZEV2ZW50TGlzdGVuZXIgd29udCB3b3JrLlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGxldCBjb250ZW50VG9wTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgY29udGVudFRvcERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnV0dG9uJykpe1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudFxuICAgICAgICBkZWxldGVQcm9qZWN0KGFycmF5UHJvamVjdCwgcHJvamVjdE5hbWUpO1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgY2xlYXJBcnJheVRvZG9ET00oKTtcbiAgICAgICAgY29udGVudFRvcE5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBjb250ZW50VG9wRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBzYXZlQXJyYXlQcm9qZWN0RGF0YSgpO1xuICAgIH1cbn0pXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtdGl0bGUnKSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0UHJvamVjdChhcnJheVByb2plY3QsIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEFycmF5VG9kbyA9IHNlbGVjdGVkUHJvamVjdC50b2RvO1xuICAgICAgICBsZXQgY29udGVudFRvcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1uYW1lJyk7XG4gICAgICAgIGxldCBjb250ZW50VG9wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb250ZW50VG9wTmFtZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgY2xlYXJBcnJheVRvZG9ET00oKTtcbiAgICAgICAgZGlzcGxheUFycmF5VG9kb0RPTShzZWxlY3RlZEFycmF5VG9kbyk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdEdsb2JhbCA9IHNlbGVjdGVkUHJvamVjdDtcbiAgICB9XG4gICAgXG59KVxuXG5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+IHtcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5Jykpe1xuICAgICAgICBtb2RhbE5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG1vZGFsRWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG1vZGFsTmV3VG9kby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbW9kYWxFZGl0VG9kby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG59KVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoYXJyYXlQcm9qZWN0LCB2YWx1ZSkge1xuICAgIGZvcihsZXQgaT0wOyBpPGFycmF5UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihhcnJheVByb2plY3RbaV0ucHJvamVjdE5hbWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgIGFycmF5UHJvamVjdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWNvbnRlbnQtY2FyZC1idXR0b24nKSkge1xuICAgICAgICBkZWxldGVUb2RvRnJvbUFycmF5VG9kbyhzZWxlY3RlZFByb2plY3RHbG9iYWwsIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgc2F2ZUFycmF5UHJvamVjdERhdGEoKTtcbiAgICB9XG59KVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QtYnV0dG9uJykpe1xuICAgICAgICBtb2RhbEVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0TmFtZSA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0TmFtZTtcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvamVjdERlc2NyaXB0aW9uID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0TmFtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0RGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVBcmVhLnZhbHVlID0gc2VsZWN0ZWRQcm9qZWN0TmFtZTtcbiAgICAgICAgZWRpdFByb2plY3REZXNjcmlwdGlvbkFyZWEudmFsdWUgPSBzZWxlY3RlZFByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgc2F2ZUFycmF5UHJvamVjdERhdGEoKTtcbiAgICB9XG59KVxuXG5cbnN1Ym1pdEVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwcm9qZWN0TmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpOyAgIFxuICAgIGxldCBlZGl0UHJvamVjdE5hbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IGVkaXRQcm9qZWN0RGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIFxuXG4gICAgbGV0IGNvbnRlbnRUb3BOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtbmFtZScpO1xuICAgIGxldCBjb250ZW50VG9wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBpc1Byb2plY3RFeGlzdCA9IGFycmF5UHJvamVjdC5zb21lKGl0ZW0gPT4gaXRlbS5wcm9qZWN0TmFtZSA9PT0gZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSk7XG4gICAgbGV0IGlzU2FtZVByb2plY3QgPSBlZGl0UHJvamVjdE5hbWVBcmVhLnZhbHVlID09PSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgaWYoaXNTYW1lUHJvamVjdCl7XG4gICAgICAgIGNoYW5nZVByb2plY3REZXNjcmlwdGlvbihzZWxlY3RlZFByb2plY3RHbG9iYWwsZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSxlZGl0UHJvamVjdERlc2NyaXB0aW9uQXJlYS52YWx1ZSk7XG4gICAgICAgICAgICBwcm9qZWN0TmF2YmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8YXJyYXlQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGFycmF5UHJvamVjdFtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmF2YmFyLmFwcGVuZChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY29udGVudFRvcE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnRlbnRUb3BEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIG1vZGFsRWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7ICAgIFxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBzYXZlQXJyYXlQcm9qZWN0RGF0YSgpO1xuICAgIH0gZWxzZSBpZiAoIWlzU2FtZVByb2plY3QpIHtcbiAgICAgICAgaWYoIWlzUHJvamVjdEV4aXN0KXtcbiAgICAgICAgICAgIGlmKGVkaXRQcm9qZWN0TmFtZUFyZWEudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHByb2plY3QgbmFtZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VQcm9qZWN0RGVzY3JpcHRpb24oc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLGVkaXRQcm9qZWN0TmFtZUFyZWEudmFsdWUsZWRpdFByb2plY3REZXNjcmlwdGlvbkFyZWEudmFsdWUpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYXZiYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8YXJyYXlQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWRldGFpbCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYXJyYXlQcm9qZWN0W2ldLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYXZiYXIuYXBwZW5kKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRUb3BOYW1lLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIG1vZGFsRWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7ICAgIFxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNhdmVBcnJheVByb2plY3REYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuXG5cblxuLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5UHJvamVjdCk7XG4vLyB9KVxuXG5mdW5jdGlvbiBjaGFuZ2VUb2RvRE9NQmFja2dyb3VuZENvbG9yKGVsZW1lbnQsIHByaW9yaXR5LCBjaGVja2JveCkge1xuICAgIGlmKGNoZWNrYm94ID09PSAnMScpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2dyZXknO1xuICAgIH0gZWxzZSBpZiAoY2hlY2tib3ggPT09ICcwJykge1xuICAgICAgICBpZihwcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ2VtZXJnZW5jeScpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZW1lcmdlbmN5Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4vLyBjb25zb2xlLmxvZyhzaG93TmV4dFNldmVuRGF5c1RvZG8oKS50aGlzV2Vla0FycmF5VG9kbylcblxuZnVuY3Rpb24gc2hvd05leHRTZXZlbkRheXNUb2RvKCl7XG4gICAgbGV0IHRoaXNXZWVrQXJyYXlUb2RvID0gW107XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBuZXh0U2V2ZW5EYXlzID0gYWRkRGF5cyhkYXRlLDcpO1xuICAgIGFycmF5UHJvamVjdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG8uZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG8uZmlsdGVyKHRvZG8uZHVlRGF0ZT5uZXh0U2V2ZW5EYXlzKTtcbiAgICAgICAgICAgIGlmKG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkgPiBkYXRlICYmIG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkgPCBuZXh0U2V2ZW5EYXlzKXtcbiAgICAgICAgICAgICAgICB0aGlzV2Vla0FycmF5VG9kby5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiB7dGhpc1dlZWtBcnJheVRvZG99O1xufVxuXG5sZXQgc2hvd05leHRTZXZlbkRheXNUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtc2V2ZW4tZGF5cy10b2RvLWJ1dHRvbicpO1xuc2hvd05leHRTZXZlbkRheXNUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGxldCBjb250ZW50VG9wUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IGNvbnRlbnRUb3BQcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtYnV0dG9uJyk7XG4gICAgbGV0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBjb250ZW50VG9wUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnTmV4dCBTZXZlbiBEYXlzIFRvZG8nO1xuICAgIGNvbnRlbnRUb3BQcm9qZWN0RGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIGVkaXRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBzaG93TmV4dFNldmVuRGF5c1RvZG8oKTtcbiAgICBjbGVhckFycmF5VG9kb0RPTSgpO1xuICAgIGRpc3BsYXlBcnJheVRvZG9ET00oc2hvd05leHRTZXZlbkRheXNUb2RvKCkudGhpc1dlZWtBcnJheVRvZG8pO1xufSlcblxuXG4vLyBmdW5jdGlvbiB0ZXN0RGF0ZSgpe1xuLy8gICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbi8vICAgICBsZXQgbmV4dFNldmVuRGF5cyA9IGFkZERheXMoZGF0ZSw3KTtcbi8vICAgICBsZXQgZHVlRGF0ZVRlc3QgPSBuZXcgRGF0ZSgnMjAyMy0xMC0zMCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKG5leHRTZXZlbkRheXMpO1xuLy8gICAgIGNvbnNvbGUubG9nKGR1ZURhdGVUZXN0Pm5leHRTZXZlbkRheXMpXG4vLyB9XG5cbi8vIHRlc3REYXRlKCk7XG5cblxuZnVuY3Rpb24gc2F2ZUFycmF5UHJvamVjdERhdGEoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyYXlQcm9qZWN0U3RyaW5naWZ5JyxKU09OLnN0cmluZ2lmeShhcnJheVByb2plY3QpKTtcbn1cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJheVByb2plY3RTdHJpbmdpZnknKSlcbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheVByb2plY3QpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=