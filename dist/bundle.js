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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;IAC5B,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;;;AAKA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe,EAAE,mCAAmC;IACpD,aAAa,EAAE,sBAAsB;IACrC,WAAW,EAAE,sCAAsC;IACnD,YAAY,EAAE,uCAAuC;IACrD,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,iCAAiC,EAAE,kCAAkC;KACpE,oFAAoF;IACrF,eAAe,EAAE,2BAA2B;EAC9C;;AAEF;IACI,cAAc;AAClB;;;AAGA;IACI,cAAc;AAClB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(126,126,126);\n}\n\n.main .nav {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding: 20px;\n}\n\n.main .nav .nav-top{\n\n}\n\n.main .nav .nav-top > h1 {\n\n}\n\n.main .nav .project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.main .nav .project-list .project-list-detail {\n    display: flex;\n}\n\n.main .nav .project-list h2 {\n    margin-right: auto;\n    cursor: pointer;\n}\n\n.main .nav .add-project {\n    text-align: right;\n}\n\n.main .content {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n\n.main .content .content-top{\n    display: flex;\n}\n\n.main .content .content-top .content-top-info {\n    margin-right: auto;\n}\n\n.main .content .content-main {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 15px;\n    padding: 30px;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.main .content .content-main .content-card {\n    background-color: lightgreen;\n    width: clamp(100px,150px, 200px);\n    height: clamp(100px,150px, 200px);\n}\n\n.main .content .add-content {\n    text-align: right;\n}\n\n.modal.new-project {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.new-project form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.new-project.active {\n    display: block;\n}\n\n\n\n.modal.edit-project {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.edit-project form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.edit-project.active {\n    display: block;\n}\n\n\n\n\n.modal.new-todo-task {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.new-todo-task form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.new-todo-task.active {\n    display: block;\n}\n\n\n\n.modal.edit-todo-task {\n    display: none;\n    position: fixed;\n    z-index: 5;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: blue;\n}\n\n.modal.edit-todo-task form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.edit-todo-task.active {\n    display: block;\n}\n\n.overlay {\n    position: fixed; /* Sit on top of the page content */\n    display: none; /* Hidden by default */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n     /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n\n.overlay.active {\n    display: block;\n}\n\n\n.edit-project, .content-card {\n    hover: pointer;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ pushNewTodoToProject)
/* harmony export */ });

function pushNewTodoToProject(project, task) {
    return project.todo.push(task);
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
    constructor(title, desc, dueDate, priority, checklist){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }
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
//try factory function for the selectedProjectGlobal;








const projectArray = [];
let selectedProjectGlobal; //currentProject State
let selectedTodoGlobal;



let project1 = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"]('example1','test');
let project2 = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"]('example2','test2');
let project3 = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"]('example3','test3');
(0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectArray, project1);
(0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectArray, project2);
(0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectArray, project3);



let todo1 = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]('test1','test1','10/07/2023','very1','1');
let todo2 = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]('test2','test2','13/07/2023','veryvery','0');
let todo3 = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]('test3','test3','25/10/2023','veryy','1');




(0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(projectArray[1], todo1);
(0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(projectArray[1], todo2);
(0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(projectArray[2], todo1);
(0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(projectArray[2], todo2);
(0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(projectArray[2], todo3);
//



let modalNewProject = document.querySelector('.modal.new-project');
let addNewProjectBtn = document.querySelector('.add-project-button');
let submitNewProjectBtn = document.querySelector('.submit-project-button');
let overlay = document.querySelector('.overlay');


addNewProjectBtn.addEventListener('click', ()=> {
    modalNewProject.classList.add('active');
    overlay.classList.add('active');
})

submitNewProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let projectName = document.querySelector('.project-name');
    let projectDescription = document.querySelector('.project-description');
    let isProjectExist = projectArray.some(item => item.projectName === projectName.value);
    if(!isProjectExist){
        if(projectName.value === ""){
            alert('Please input the name');
        } else {
            let project = new _javascript_project_constructor_js__WEBPACK_IMPORTED_MODULE_1__["default"](projectName.value, projectDescription.value);
            (0,_javascript_push_project_to_array_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectArray, project); 
            modalNewProject.classList.remove('active');
            overlay.classList.remove('active');
            document.querySelector('.new-project-form').reset();
            projectNavbarDOMController(projectArray)}
    } else {
        alert('Project already exists');
    }
})



let modalNewTodo = document.querySelector('.modal.new-todo-task');
let addTodoBtn = document.querySelector('.add-task');
let submitTaskBtn = document.querySelector('.submit-task-button');

addTodoBtn.addEventListener('click', ()=> {
    modalNewTodo.classList.add('active');
    overlay.classList.add('active');
})


submitTaskBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    
    let taskName = document.querySelector('.task-name');
    let taskDescription = document.querySelector('.task-description');
    let dueDate = document.querySelector('.due-date-new-todo');
    let priorityNewTodo = document.querySelector('.priority-new-todo');
    let taskCheckbox = document.querySelector('.task-checkbox');
    taskCheckbox.checked == true ? taskCheckbox.value = 1 : taskCheckbox.value = 0;
    let isTodoExists = selectedProjectGlobal.todo.some(item => item.title === taskName.value);
    if(!isTodoExists) {let todo = new _javascript_todo_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"](taskName.value, taskDescription.value, dueDate.value, priorityNewTodo.value, taskCheckbox.value);
        (0,_javascript_push_new_todo_to_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(selectedProjectGlobal, todo);
        modalNewTodo.classList.remove('active');
        overlay.classList.remove('active');
        clearTodoDomList();
        document.querySelector('.new-todo-form').reset();
        displayTodoList(selectedProjectGlobal.todo);
        console.log(projectArray);}
    else {
        alert('todo already exists!')
    }
})


function currentTodo(todoArray, todoTitle) {
    for(let i=0; i<todoArray.length; i++) {
        if(todoArray[i].title === todoTitle) {
            return todoArray[i]
        };
    }
}


function deleteTodoFromProject(project, todoTitle) {
    let todoArray = project.todo
    for(let i=0; i<todoArray.length; i++) {
        if(todoArray[i].title === todoTitle) {
            todoArray.splice(i,1);
        }
    }
}

function changeProjectDescription(project, projectName, projectDescription) {
    project.projectName = projectName;
    project.projectDescription = projectDescription;
}

function changeTodoDescription(currentTodo, title, desc, dueDate, priority, checklist){
    currentTodo.title = title;
    currentTodo.desc = desc;
    currentTodo.dueDate = dueDate;
    currentTodo.priority = priority;
    currentTodo.checklist = checklist;
}

//add last element of projectArray to the DOM
function projectNavbarDOMController(projectArray) {
    let projectNavbar = document.querySelector('.project-list');    
    let project = document.createElement('div');
    project.classList.add('project-list-detail');
    let projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projectArray[projectArray.length-1].projectName;
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'delete';
    project.append(projectTitle);
    project.append(deleteBtn);
    projectNavbar.append(project);
}

function displayTodoList(arrayTodo) {
    let contentBody = document.querySelector('.content-main')
    for(let i = 0; i < arrayTodo.length; i++) {
        let contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        let contentCardTitle = document.createElement('h1');
        contentCardTitle.classList.add('content-card-info', 'title');
        contentCardTitle.textContent = arrayTodo[i].title
        let contentCardDesc = document.createElement('p');
        contentCardDesc.classList.add('content-card-info', 'desc');
        contentCardDesc.textContent = arrayTodo[i].desc;
        let contentCardDueDate = document.createElement('div');
        contentCardDueDate.classList.add('content-card-info', 'due-date');
        contentCardDueDate.textContent = arrayTodo[i].dueDate;
        let contentCardPriority = document.createElement('div');
        contentCardPriority.classList.add('content-card-info', 'priority');
        contentCardPriority.textContent = arrayTodo[i].priority;
        let contentCardCheckList = document.createElement('div');
        contentCardCheckList.classList.add('content-card-info', 'checklist');
        contentCardCheckList.textContent = arrayTodo[i].checklist;
        let updateContentCardBtn = document.createElement('button');
        updateContentCardBtn.classList.add('update-content-card-button');
        updateContentCardBtn.textContent = 'update'
        let deleteContentCardBtn = document.createElement('button');
        deleteContentCardBtn.classList.add('delete-content-card-button');
        deleteContentCardBtn.textContent = 'delete'
        contentCard.append(contentCardTitle);
        contentCard.append(contentCardDesc);
        contentCard.append(contentCardDueDate);
        contentCard.append(contentCardPriority);
        contentCard.append(contentCardCheckList);
        contentCard.append(updateContentCardBtn);
        contentCard.append(deleteContentCardBtn);
        contentBody.append(contentCard);
    }
}

//edit the content card
document.body.addEventListener('click', (event)=> {    
    if(event.target.classList.contains('update-content-card-button')) {
        let editTaskName = document.querySelector('.edit-task-name');
        let editTaskDescription = document.querySelector('.edit-task-description');
        let editTaskDueDate = document.querySelector('.edit-due-date');
        let editPriority = document.querySelector('.edit-priority');
        let editTaskCheckbox = document.querySelector('.edit-task-checkbox');
        let modalEditTodo = document.querySelector('.modal.edit-todo-task');
        modalEditTodo.classList.add('active');
        overlay.classList.add('active');
        let currentTitleTodo = event.target.parentNode.firstChild.textContent;
        let selectedTodo = currentTodo(selectedProjectGlobal.todo, currentTitleTodo);
        selectedTodoGlobal = selectedTodo;
        editTaskName.value = selectedTodo.title;
        editTaskDescription.value = selectedTodo.desc; 
        editTaskDueDate.value = selectedTodo.dueDate;
        editPriority.value = selectedTodo.priority;
        selectedTodo.checklist == 1 ? editTaskCheckbox.checked = true : editTaskCheckbox.checked = false;
    }
    
})



let modalEditTodo = document.querySelector('.modal.edit-todo-task');
document.body.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('submit-edit-task-button')) {
        event.preventDefault();
        
        let editTaskName = document.querySelector('.edit-task-name');
        let editTaskDescription = document.querySelector('.edit-task-description');
        let editTaskDueDate = document.querySelector('.edit-due-date');
        let editPriority = document.querySelector('.edit-priority');
        let editTaskCheckbox = document.querySelector('.edit-task-checkbox');
        editTaskCheckbox.checked == true ? editTaskCheckbox.value = 1 : editTaskCheckbox.value = 0;
        let isTodoExists = selectedProjectGlobal.todo.some(item => item.title === editTaskName.value);
        let isSameTodo = selectedTodoGlobal.title === editTaskName.value;
        if(isSameTodo) {
            changeTodoDescription(selectedTodoGlobal, editTaskName.value, editTaskDescription.value, editTaskDueDate.value, editPriority.value, editTaskCheckbox.value);
            clearTodoDomList();
            displayTodoList(selectedProjectGlobal.todo);
            modalEditTodo.classList.remove('active');
            overlay.classList.remove('active');
            console.log(projectArray);
        } else if (!isSameTodo) {
            if(!isTodoExists) {
                changeTodoDescription(selectedTodoGlobal, editTaskName.value, editTaskDescription.value, editTaskDueDate.value, editPriority.value, editTaskCheckbox.value);
                clearTodoDomList();
                displayTodoList(selectedProjectGlobal.todo);
                modalEditTodo.classList.remove('active');
                overlay.classList.remove('active');
                console.log(projectArray);
            } else {
                alert('Todo already exists! Choose another name')
            }
        }
    }  
})
//add preventDefault for submitBtn


function clearTodoDomList() {
    let contentBody = document.querySelector('.content-main');
    contentBody.innerHTML = "";
}

//for deleting. use window because if a button generated dynamically, the addEventListener wont work.
document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('delete-button')){
        deleteProject(projectArray, event.target.previousElementSibling.textContent);
        event.target.parentNode.remove();
    }
})


document.body.addEventListener('click', (event)=> {
    
    if(event.target.classList.contains('project-title')) {
        let selectedProject = (0,_javascript_current_project_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectArray, event.target.textContent);
        let selectedProjectTodoList = selectedProject.todo;
        let contentTopTitle = document.querySelector('.content-top-project-name');
        let contentTopDescription = document.querySelector('.content-top-project-description');
        contentTopTitle.textContent = selectedProject.projectName;
        contentTopDescription.textContent = selectedProject.projectDescription;
        clearTodoDomList();
        displayTodoList(selectedProjectTodoList);
        selectedProjectGlobal = selectedProject;
    }
    
})



document.body.addEventListener('click',(event)=> {
    let modalEditTodo = document.querySelector('.modal.edit-todo-task');
    if(event.target.classList.contains('overlay')){
        modalNewTodo.classList.remove('active');
        modalEditTodo.classList.remove('active');
        modalNewProject.classList.remove('active');
        modalEditProject.classList.remove('active');
        overlay.classList.remove('active');
    }
})



//for Array
function deleteProject(projectArray, value) {
    for(let i=0; i<projectArray.length; i++) {
        if(projectArray[i].projectName === value){
            projectArray.splice(i,1);
        }
    }
}


document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-content-card-button')) {
        deleteTodoFromProject(selectedProjectGlobal, event.target.parentNode.firstChild.textContent);
        event.target.parentNode.remove();
    }
})
let modalEditProject = document.querySelector('.modal.edit-project');
document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('edit-project-button')){
        modalEditProject.classList.add('active');
        overlay.classList.add('active');
        let currentProjectTitle = selectedProjectGlobal.projectName;
        let currentProjectDescription = selectedProjectGlobal.projectDescription;
        let editProjectNameArea = document.querySelector('.edit-project-name');
        let editProjectDescriptionArea = document.querySelector('.edit-project-description');
        editProjectNameArea.value = currentProjectTitle;
        editProjectDescriptionArea.value = currentProjectDescription;
    }
})

let submitEditProjectBtn = document.querySelector('.submit-edit-project-button');
submitEditProjectBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let projectNavbar = document.querySelector('.project-list');   
    let editProjectNameArea = document.querySelector('.edit-project-name');
    let editProjectDescriptionArea = document.querySelector('.edit-project-description');
    

    let contentTopTitle = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    let isProjectExist = projectArray.some(item => item.projectName === editProjectNameArea.value);
    let isSameProject = editProjectNameArea.value === selectedProjectGlobal.projectName;
    if(isSameProject){
        changeProjectDescription(selectedProjectGlobal,editProjectNameArea.value,editProjectDescriptionArea.value);
            projectNavbar.innerHTML = '';
            for(let i=0; i<projectArray.length; i++) {
                let project = document.createElement('div');
                project.classList.add('project-list-detail');
                let projectTitle = document.createElement('h2');
                projectTitle.classList.add('project-title');
                projectTitle.textContent = projectArray[i].projectName;
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-button');
                deleteBtn.textContent = 'delete';
                project.append(projectTitle);
                project.append(deleteBtn);
                projectNavbar.append(project);
            }
        contentTopTitle.textContent = selectedProjectGlobal.projectName;
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
                for(let i=0; i<projectArray.length; i++) {
                    let project = document.createElement('div');
                    project.classList.add('project-list-detail');
                    let projectTitle = document.createElement('h2');
                    projectTitle.classList.add('project-title');
                    projectTitle.textContent = projectArray[i].projectName;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-button');
                    deleteBtn.textContent = 'delete';
                    project.append(projectTitle);
                    project.append(deleteBtn);
                    projectNavbar.append(project);
                }
            }
            contentTopTitle.textContent = selectedProjectGlobal.projectName;
            contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
            modalEditProject.classList.remove('active');    
            overlay.classList.remove('active');
        } else {
            alert('Project already exists');
        }
    }
})




document.body.addEventListener('click', ()=> {
    console.log(projectArray);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMEVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC9jdXJyZW50LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvamF2YXNjcmlwdC9wcm9qZWN0LWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2phdmFzY3JpcHQvcHVzaC1uZXctdG9kby10by1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2phdmFzY3JpcHQvcHVzaC1wcm9qZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2phdmFzY3JpcHQvdG9kby1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjYsMTI2LDEyNik7XG59XG5cbi5tYWluIC5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1haW4gLm5hdiAubmF2LXRvcHtcblxufVxuXG4ubWFpbiAubmF2IC5uYXYtdG9wID4gaDEge1xuXG59XG5cbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbn1cblxuLm1haW4gLm5hdiAucHJvamVjdC1saXN0IC5wcm9qZWN0LWxpc3QtZGV0YWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbiAubmF2IC5wcm9qZWN0LWxpc3QgaDIge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluIC5uYXYgLmFkZC1wcm9qZWN0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4gLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcbn1cblxuXG4ubWFpbiAuY29udGVudCAuY29udGVudC10b3B7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4gLmNvbnRlbnQgLmNvbnRlbnQtdG9wIC5jb250ZW50LXRvcC1pbmZvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4gLmNvbnRlbnQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsMTUwcHgsIDIwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LDE1MHB4LCAyMDBweCk7XG59XG5cbi5tYWluIC5jb250ZW50IC5hZGQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2RhbC5uZXctcHJvamVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubW9kYWwubmV3LXByb2plY3QgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbC5uZXctcHJvamVjdC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuLm1vZGFsLmVkaXQtcHJvamVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubW9kYWwuZWRpdC1wcm9qZWN0IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwuZWRpdC1wcm9qZWN0LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuXG5cbi5tb2RhbC5uZXctdG9kby10YXNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5tb2RhbC5uZXctdG9kby10YXNrIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwubmV3LXRvZG8tdGFzay5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuLm1vZGFsLmVkaXQtdG9kby10YXNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5tb2RhbC5lZGl0LXRvZG8tdGFzayBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLmVkaXQtdG9kby10YXNrLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgIC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgfVxuXG4ub3ZlcmxheS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5lZGl0LXByb2plY3QsIC5jb250ZW50LWNhcmQge1xuICAgIGhvdmVyOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7OztBQUtBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWUsRUFBRSxtQ0FBbUM7SUFDcEQsYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGlDQUFpQyxFQUFFLGtDQUFrQztLQUNwRSxvRkFBb0Y7SUFDckYsZUFBZSxFQUFFLDJCQUEyQjtFQUM5Qzs7QUFFRjtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LDEyNiwxMjYpO1xcbn1cXG5cXG4ubWFpbiAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubWFpbiAubmF2IC5uYXYtdG9we1xcblxcbn1cXG5cXG4ubWFpbiAubmF2IC5uYXYtdG9wID4gaDEge1xcblxcbn1cXG5cXG4ubWFpbiAubmF2IC5wcm9qZWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCAucHJvamVjdC1saXN0LWRldGFpbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIC5uYXYgLnByb2plY3QtbGlzdCBoMiB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbiAubmF2IC5hZGQtcHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuXFxuLm1haW4gLmNvbnRlbnQgLmNvbnRlbnQtdG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCAuY29udGVudC10b3AgLmNvbnRlbnQtdG9wLWluZm8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5tYWluIC5jb250ZW50IC5jb250ZW50LW1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCAuY29udGVudC1tYWluIC5jb250ZW50LWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsMTUwcHgsIDIwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwxNTBweCwgMjAwcHgpO1xcbn1cXG5cXG4ubWFpbiAuY29udGVudCAuYWRkLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm1vZGFsLm5ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubW9kYWwubmV3LXByb2plY3QgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwubmV3LXByb2plY3QuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcblxcbi5tb2RhbC5lZGl0LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tb2RhbC5lZGl0LXByb2plY3QgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwuZWRpdC1wcm9qZWN0LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG5cXG5cXG4ubW9kYWwubmV3LXRvZG8tdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLm1vZGFsLm5ldy10b2RvLXRhc2sgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwubmV3LXRvZG8tdGFzay5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuXFxuLm1vZGFsLmVkaXQtdG9kby10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubW9kYWwuZWRpdC10b2RvLXRhc2sgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwuZWRpdC10b2RvLXRhc2suYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXFxuICAgICAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xcbiAgfVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG4uZWRpdC1wcm9qZWN0LCAuY29udGVudC1jYXJkIHtcXG4gICAgaG92ZXI6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyZW50UHJvamVjdChhcnJheSwgbmFtZSl7XG4gICAgZm9yKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihhcnJheVtpXS5wcm9qZWN0TmFtZSA9PT0gbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVzaE5ld1RvZG9Ub1Byb2plY3QocHJvamVjdCwgdGFzaykge1xuICAgIHJldHVybiBwcm9qZWN0LnRvZG8ucHVzaCh0YXNrKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdXNoUHJvamVjdFRvQXJyYXkoYXJyYXksIHByb2plY3QpIHtcbiAgICBhcnJheS5wdXNoKHByb2plY3QpO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL3RyeSBmYWN0b3J5IGZ1bmN0aW9uIGZvciB0aGUgc2VsZWN0ZWRQcm9qZWN0R2xvYmFsO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vamF2YXNjcmlwdC9wcm9qZWN0LWNvbnN0cnVjdG9yLmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vamF2YXNjcmlwdC90b2RvLWNvbnN0cnVjdG9yLmpzJztcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tICcuL2phdmFzY3JpcHQvY3VycmVudC1wcm9qZWN0LmpzJztcbmltcG9ydCBwdXNoUHJvamVjdFRvQXJyYXkgZnJvbSAnLi9qYXZhc2NyaXB0L3B1c2gtcHJvamVjdC10by1hcnJheS5qcyc7XG5pbXBvcnQgcHVzaE5ld1RvZG9Ub1Byb2plY3QgZnJvbSAnLi9qYXZhc2NyaXB0L3B1c2gtbmV3LXRvZG8tdG8tcHJvamVjdC5qcyc7XG5cbmNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdEdsb2JhbDsgLy9jdXJyZW50UHJvamVjdCBTdGF0ZVxubGV0IHNlbGVjdGVkVG9kb0dsb2JhbDtcblxuXG5cbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdleGFtcGxlMScsJ3Rlc3QnKTtcbmxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdleGFtcGxlMicsJ3Rlc3QyJyk7XG5sZXQgcHJvamVjdDMgPSBuZXcgUHJvamVjdCgnZXhhbXBsZTMnLCd0ZXN0MycpO1xucHVzaFByb2plY3RUb0FycmF5KHByb2plY3RBcnJheSwgcHJvamVjdDEpO1xucHVzaFByb2plY3RUb0FycmF5KHByb2plY3RBcnJheSwgcHJvamVjdDIpO1xucHVzaFByb2plY3RUb0FycmF5KHByb2plY3RBcnJheSwgcHJvamVjdDMpO1xuXG5cblxubGV0IHRvZG8xID0gbmV3IFRvZG8oJ3Rlc3QxJywndGVzdDEnLCcxMC8wNy8yMDIzJywndmVyeTEnLCcxJyk7XG5sZXQgdG9kbzIgPSBuZXcgVG9kbygndGVzdDInLCd0ZXN0MicsJzEzLzA3LzIwMjMnLCd2ZXJ5dmVyeScsJzAnKTtcbmxldCB0b2RvMyA9IG5ldyBUb2RvKCd0ZXN0MycsJ3Rlc3QzJywnMjUvMTAvMjAyMycsJ3Zlcnl5JywnMScpO1xuXG5cblxuXG5wdXNoTmV3VG9kb1RvUHJvamVjdChwcm9qZWN0QXJyYXlbMV0sIHRvZG8xKTtcbnB1c2hOZXdUb2RvVG9Qcm9qZWN0KHByb2plY3RBcnJheVsxXSwgdG9kbzIpO1xucHVzaE5ld1RvZG9Ub1Byb2plY3QocHJvamVjdEFycmF5WzJdLCB0b2RvMSk7XG5wdXNoTmV3VG9kb1RvUHJvamVjdChwcm9qZWN0QXJyYXlbMl0sIHRvZG8yKTtcbnB1c2hOZXdUb2RvVG9Qcm9qZWN0KHByb2plY3RBcnJheVsyXSwgdG9kbzMpO1xuLy9cblxuXG5cbmxldCBtb2RhbE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwubmV3LXByb2plY3QnKTtcbmxldCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ1dHRvbicpO1xubGV0IHN1Ym1pdE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXByb2plY3QtYnV0dG9uJyk7XG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cblxuYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIG1vZGFsTmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSlcblxuc3VibWl0TmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgaXNQcm9qZWN0RXhpc3QgPSBwcm9qZWN0QXJyYXkuc29tZShpdGVtID0+IGl0ZW0ucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBpZighaXNQcm9qZWN0RXhpc3Qpe1xuICAgICAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHRoZSBuYW1lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgcHVzaFByb2plY3RUb0FycmF5KHByb2plY3RBcnJheSwgcHJvamVjdCk7IFxuICAgICAgICAgICAgbW9kYWxOZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgICAgICAgICAgIHByb2plY3ROYXZiYXJET01Db250cm9sbGVyKHByb2plY3RBcnJheSl9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG59KVxuXG5cblxubGV0IG1vZGFsTmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5uZXctdG9kby10YXNrJyk7XG5sZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xubGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2stYnV0dG9uJyk7XG5cbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBtb2RhbE5ld1RvZG8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pXG5cblxuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtbmV3LXRvZG8nKTtcbiAgICBsZXQgcHJpb3JpdHlOZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LW5ldy10b2RvJyk7XG4gICAgbGV0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNoZWNrYm94Jyk7XG4gICAgdGFza0NoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSA/IHRhc2tDaGVja2JveC52YWx1ZSA9IDEgOiB0YXNrQ2hlY2tib3gudmFsdWUgPSAwO1xuICAgIGxldCBpc1RvZG9FeGlzdHMgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwudG9kby5zb21lKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGFza05hbWUudmFsdWUpO1xuICAgIGlmKCFpc1RvZG9FeGlzdHMpIHtsZXQgdG9kbyA9IG5ldyBUb2RvKHRhc2tOYW1lLnZhbHVlLCB0YXNrRGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5TmV3VG9kby52YWx1ZSwgdGFza0NoZWNrYm94LnZhbHVlKTtcbiAgICAgICAgcHVzaE5ld1RvZG9Ub1Byb2plY3Qoc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLCB0b2RvKTtcbiAgICAgICAgbW9kYWxOZXdUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBjbGVhclRvZG9Eb21MaXN0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1mb3JtJykucmVzZXQoKTtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KCd0b2RvIGFscmVhZHkgZXhpc3RzIScpXG4gICAgfVxufSlcblxuXG5mdW5jdGlvbiBjdXJyZW50VG9kbyh0b2RvQXJyYXksIHRvZG9UaXRsZSkge1xuICAgIGZvcihsZXQgaT0wOyBpPHRvZG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0b2RvQXJyYXlbaV0udGl0bGUgPT09IHRvZG9UaXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9BcnJheVtpXVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvRnJvbVByb2plY3QocHJvamVjdCwgdG9kb1RpdGxlKSB7XG4gICAgbGV0IHRvZG9BcnJheSA9IHByb2plY3QudG9kb1xuICAgIGZvcihsZXQgaT0wOyBpPHRvZG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0b2RvQXJyYXlbaV0udGl0bGUgPT09IHRvZG9UaXRsZSkge1xuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdCwgcHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgIHByb2plY3QucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKGN1cnJlbnRUb2RvLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCl7XG4gICAgY3VycmVudFRvZG8udGl0bGUgPSB0aXRsZTtcbiAgICBjdXJyZW50VG9kby5kZXNjID0gZGVzYztcbiAgICBjdXJyZW50VG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBjdXJyZW50VG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGN1cnJlbnRUb2RvLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbn1cblxuLy9hZGQgbGFzdCBlbGVtZW50IG9mIHByb2plY3RBcnJheSB0byB0aGUgRE9NXG5mdW5jdGlvbiBwcm9qZWN0TmF2YmFyRE9NQ29udHJvbGxlcihwcm9qZWN0QXJyYXkpIHtcbiAgICBsZXQgcHJvamVjdE5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTsgICAgXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXkubGVuZ3RoLTFdLnByb2plY3ROYW1lO1xuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgIHByb2plY3QuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBwcm9qZWN0TmF2YmFyLmFwcGVuZChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KGFycmF5VG9kbykge1xuICAgIGxldCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LW1haW4nKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheVRvZG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZCcpO1xuICAgICAgICBsZXQgY29udGVudENhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkLWluZm8nLCAndGl0bGUnKTtcbiAgICAgICAgY29udGVudENhcmRUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS50aXRsZVxuICAgICAgICBsZXQgY29udGVudENhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb250ZW50Q2FyZERlc2MuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkLWluZm8nLCAnZGVzYycpO1xuICAgICAgICBjb250ZW50Q2FyZERlc2MudGV4dENvbnRlbnQgPSBhcnJheVRvZG9baV0uZGVzYztcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q2FyZER1ZURhdGUuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkLWluZm8nLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgY29udGVudENhcmREdWVEYXRlLnRleHRDb250ZW50ID0gYXJyYXlUb2RvW2ldLmR1ZURhdGU7XG4gICAgICAgIGxldCBjb250ZW50Q2FyZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkLWluZm8nLCAncHJpb3JpdHknKTtcbiAgICAgICAgY29udGVudENhcmRQcmlvcml0eS50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS5wcmlvcml0eTtcbiAgICAgICAgbGV0IGNvbnRlbnRDYXJkQ2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDYXJkQ2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZC1pbmZvJywgJ2NoZWNrbGlzdCcpO1xuICAgICAgICBjb250ZW50Q2FyZENoZWNrTGlzdC50ZXh0Q29udGVudCA9IGFycmF5VG9kb1tpXS5jaGVja2xpc3Q7XG4gICAgICAgIGxldCB1cGRhdGVDb250ZW50Q2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB1cGRhdGVDb250ZW50Q2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCd1cGRhdGUtY29udGVudC1jYXJkLWJ1dHRvbicpO1xuICAgICAgICB1cGRhdGVDb250ZW50Q2FyZEJ0bi50ZXh0Q29udGVudCA9ICd1cGRhdGUnXG4gICAgICAgIGxldCBkZWxldGVDb250ZW50Q2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVDb250ZW50Q2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtY29udGVudC1jYXJkLWJ1dHRvbicpO1xuICAgICAgICBkZWxldGVDb250ZW50Q2FyZEJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnXG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZFRpdGxlKTtcbiAgICAgICAgY29udGVudENhcmQuYXBwZW5kKGNvbnRlbnRDYXJkRGVzYyk7XG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZER1ZURhdGUpO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmQoY29udGVudENhcmRQcmlvcml0eSk7XG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChjb250ZW50Q2FyZENoZWNrTGlzdCk7XG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZCh1cGRhdGVDb250ZW50Q2FyZEJ0bik7XG4gICAgICAgIGNvbnRlbnRDYXJkLmFwcGVuZChkZWxldGVDb250ZW50Q2FyZEJ0bik7XG4gICAgICAgIGNvbnRlbnRCb2R5LmFwcGVuZChjb250ZW50Q2FyZCk7XG4gICAgfVxufVxuXG4vL2VkaXQgdGhlIGNvbnRlbnQgY2FyZFxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7ICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3VwZGF0ZS1jb250ZW50LWNhcmQtYnV0dG9uJykpIHtcbiAgICAgICAgbGV0IGVkaXRUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stbmFtZScpO1xuICAgICAgICBsZXQgZWRpdFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGVkaXRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWR1ZS1kYXRlJyk7XG4gICAgICAgIGxldCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcmlvcml0eScpO1xuICAgICAgICBsZXQgZWRpdFRhc2tDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stY2hlY2tib3gnKTtcbiAgICAgICAgbGV0IG1vZGFsRWRpdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZWRpdC10b2RvLXRhc2snKTtcbiAgICAgICAgbW9kYWxFZGl0VG9kby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnRUaXRsZVRvZG8gPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvID0gY3VycmVudFRvZG8oc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnRvZG8sIGN1cnJlbnRUaXRsZVRvZG8pO1xuICAgICAgICBzZWxlY3RlZFRvZG9HbG9iYWwgPSBzZWxlY3RlZFRvZG87XG4gICAgICAgIGVkaXRUYXNrTmFtZS52YWx1ZSA9IHNlbGVjdGVkVG9kby50aXRsZTtcbiAgICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHNlbGVjdGVkVG9kby5kZXNjOyBcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlLnZhbHVlID0gc2VsZWN0ZWRUb2RvLmR1ZURhdGU7XG4gICAgICAgIGVkaXRQcmlvcml0eS52YWx1ZSA9IHNlbGVjdGVkVG9kby5wcmlvcml0eTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmNoZWNrbGlzdCA9PSAxID8gZWRpdFRhc2tDaGVja2JveC5jaGVja2VkID0gdHJ1ZSA6IGVkaXRUYXNrQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbn0pXG5cblxuXG5sZXQgbW9kYWxFZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5lZGl0LXRvZG8tdGFzaycpO1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdC1lZGl0LXRhc2stYnV0dG9uJykpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBlZGl0VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLW5hbWUnKTtcbiAgICAgICAgbGV0IGVkaXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBlZGl0VGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kdWUtZGF0ZScpO1xuICAgICAgICBsZXQgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJpb3JpdHknKTtcbiAgICAgICAgbGV0IGVkaXRUYXNrQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWNoZWNrYm94Jyk7XG4gICAgICAgIGVkaXRUYXNrQ2hlY2tib3guY2hlY2tlZCA9PSB0cnVlID8gZWRpdFRhc2tDaGVja2JveC52YWx1ZSA9IDEgOiBlZGl0VGFza0NoZWNrYm94LnZhbHVlID0gMDtcbiAgICAgICAgbGV0IGlzVG9kb0V4aXN0cyA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvLnNvbWUoaXRlbSA9PiBpdGVtLnRpdGxlID09PSBlZGl0VGFza05hbWUudmFsdWUpO1xuICAgICAgICBsZXQgaXNTYW1lVG9kbyA9IHNlbGVjdGVkVG9kb0dsb2JhbC50aXRsZSA9PT0gZWRpdFRhc2tOYW1lLnZhbHVlO1xuICAgICAgICBpZihpc1NhbWVUb2RvKSB7XG4gICAgICAgICAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24oc2VsZWN0ZWRUb2RvR2xvYmFsLCBlZGl0VGFza05hbWUudmFsdWUsIGVkaXRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGVkaXRUYXNrRHVlRGF0ZS52YWx1ZSwgZWRpdFByaW9yaXR5LnZhbHVlLCBlZGl0VGFza0NoZWNrYm94LnZhbHVlKTtcbiAgICAgICAgICAgIGNsZWFyVG9kb0RvbUxpc3QoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvTGlzdChzZWxlY3RlZFByb2plY3RHbG9iYWwudG9kbyk7XG4gICAgICAgICAgICBtb2RhbEVkaXRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU2FtZVRvZG8pIHtcbiAgICAgICAgICAgIGlmKCFpc1RvZG9FeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24oc2VsZWN0ZWRUb2RvR2xvYmFsLCBlZGl0VGFza05hbWUudmFsdWUsIGVkaXRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGVkaXRUYXNrRHVlRGF0ZS52YWx1ZSwgZWRpdFByaW9yaXR5LnZhbHVlLCBlZGl0VGFza0NoZWNrYm94LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvZG9Eb21MaXN0KCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9MaXN0KHNlbGVjdGVkUHJvamVjdEdsb2JhbC50b2RvKTtcbiAgICAgICAgICAgICAgICBtb2RhbEVkaXRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RvZG8gYWxyZWFkeSBleGlzdHMhIENob29zZSBhbm90aGVyIG5hbWUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgXG59KVxuLy9hZGQgcHJldmVudERlZmF1bHQgZm9yIHN1Ym1pdEJ0blxuXG5cbmZ1bmN0aW9uIGNsZWFyVG9kb0RvbUxpc3QoKSB7XG4gICAgbGV0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtbWFpbicpO1xuICAgIGNvbnRlbnRCb2R5LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbi8vZm9yIGRlbGV0aW5nLiB1c2Ugd2luZG93IGJlY2F1c2UgaWYgYSBidXR0b24gZ2VuZXJhdGVkIGR5bmFtaWNhbGx5LCB0aGUgYWRkRXZlbnRMaXN0ZW5lciB3b250IHdvcmsuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnV0dG9uJykpe1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RBcnJheSwgZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpO1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICB9XG59KVxuXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtdGl0bGUnKSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QocHJvamVjdEFycmF5LCBldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0VG9kb0xpc3QgPSBzZWxlY3RlZFByb2plY3QudG9kbztcbiAgICAgICAgbGV0IGNvbnRlbnRUb3BUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IGNvbnRlbnRUb3BEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcC1wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnRlbnRUb3BUaXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgY2xlYXJUb2RvRG9tTGlzdCgpO1xuICAgICAgICBkaXNwbGF5VG9kb0xpc3Qoc2VsZWN0ZWRQcm9qZWN0VG9kb0xpc3QpO1xuICAgICAgICBzZWxlY3RlZFByb2plY3RHbG9iYWwgPSBzZWxlY3RlZFByb2plY3Q7XG4gICAgfVxuICAgIFxufSlcblxuXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PiB7XG4gICAgbGV0IG1vZGFsRWRpdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZWRpdC10b2RvLXRhc2snKTtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5Jykpe1xuICAgICAgICBtb2RhbE5ld1RvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG1vZGFsRWRpdFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG1vZGFsTmV3UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbW9kYWxFZGl0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG59KVxuXG5cblxuLy9mb3IgQXJyYXlcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdEFycmF5LCB2YWx1ZSkge1xuICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihwcm9qZWN0QXJyYXlbaV0ucHJvamVjdE5hbWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWNvbnRlbnQtY2FyZC1idXR0b24nKSkge1xuICAgICAgICBkZWxldGVUb2RvRnJvbVByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLCBldmVudC50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgfVxufSlcbmxldCBtb2RhbEVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLmVkaXQtcHJvamVjdCcpO1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0LWJ1dHRvbicpKXtcbiAgICAgICAgbW9kYWxFZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0VGl0bGUgPSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdERlc2NyaXB0aW9uID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0TmFtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0RGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVBcmVhLnZhbHVlID0gY3VycmVudFByb2plY3RUaXRsZTtcbiAgICAgICAgZWRpdFByb2plY3REZXNjcmlwdGlvbkFyZWEudmFsdWUgPSBjdXJyZW50UHJvamVjdERlc2NyaXB0aW9uO1xuICAgIH1cbn0pXG5cbmxldCBzdWJtaXRFZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuc3VibWl0RWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHByb2plY3ROYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7ICAgXG4gICAgbGV0IGVkaXRQcm9qZWN0TmFtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgZWRpdFByb2plY3REZXNjcmlwdGlvbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgXG5cbiAgICBsZXQgY29udGVudFRvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wLXByb2plY3QtbmFtZScpO1xuICAgIGxldCBjb250ZW50VG9wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AtcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBpc1Byb2plY3RFeGlzdCA9IHByb2plY3RBcnJheS5zb21lKGl0ZW0gPT4gaXRlbS5wcm9qZWN0TmFtZSA9PT0gZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSk7XG4gICAgbGV0IGlzU2FtZVByb2plY3QgPSBlZGl0UHJvamVjdE5hbWVBcmVhLnZhbHVlID09PSBzZWxlY3RlZFByb2plY3RHbG9iYWwucHJvamVjdE5hbWU7XG4gICAgaWYoaXNTYW1lUHJvamVjdCl7XG4gICAgICAgIGNoYW5nZVByb2plY3REZXNjcmlwdGlvbihzZWxlY3RlZFByb2plY3RHbG9iYWwsZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSxlZGl0UHJvamVjdERlc2NyaXB0aW9uQXJlYS52YWx1ZSk7XG4gICAgICAgICAgICBwcm9qZWN0TmF2YmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdC1kZXRhaWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hdmJhci5hcHBlbmQocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNvbnRlbnRUb3BUaXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0TmFtZTtcbiAgICAgICAgY29udGVudFRvcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0R2xvYmFsLnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgbW9kYWxFZGl0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgICAgXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIGlmICghaXNTYW1lUHJvamVjdCkge1xuICAgICAgICBpZighaXNQcm9qZWN0RXhpc3Qpe1xuICAgICAgICAgICAgaWYoZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgcHJvamVjdCBuYW1lJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZVByb2plY3REZXNjcmlwdGlvbihzZWxlY3RlZFByb2plY3RHbG9iYWwsZWRpdFByb2plY3ROYW1lQXJlYS52YWx1ZSxlZGl0UHJvamVjdERlc2NyaXB0aW9uQXJlYS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hdmJhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtZGV0YWlsJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYXZiYXIuYXBwZW5kKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRUb3BUaXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIGNvbnRlbnRUb3BEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdEdsb2JhbC5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgICAgICBtb2RhbEVkaXRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAgICBcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuXG5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==