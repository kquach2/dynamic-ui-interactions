/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, " body {\n   display: flex;\n   flex-direction: column;\n   gap: 50px;\n }\n \n /* Dropdown Button */\n .dropbtn {\n    background-color: #3498DB;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n  }\n  \n  /* Dropdown button on hover & focus */\n  .dropbtn:hover, .dropbtn:focus {\n    background-color: #2980B9;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd}\n  \n  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n  .show {display:block;} \n\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    background: #e6e6e6;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  .navigation {\n    width: 100%;\n    border-bottom: 1px solid #ccc;\n    background: #fff;\n    height: 50px /* Collapsed navigation height */;\n  }\n  .navigation__inner {\n    display: flex;\n    max-width: 900px;\n    height: 50px /* Collapsed navigation height */;\n    margin: 0 auto;\n    overflow: hidden;\n  }\n  .toggle:checked ~ .navigation__inner {\n    height: auto /* Full height when more is toggled */;\n  }\n  .navigation__link {\n    display: block;\n    padding: 0 20px;\n    font-size: 14px;\n    line-height: 50px /* Collapsed navigation height */;\n    text-decoration: none;\n    color: #000;\n    cursor: pointer;\n  }\n  .navigation__link:hover {\n    text-decoration: underline;\n  }\n  .navigation__logo {\n    flex-shrink: 0 /* Stops logo collapsing */;\n    align-self: flex-start /* Stops logo stretching with list */;\n    border-left: 1px solid #ccc;\n  }\n  .navigation__logo .navigation__link {\n    font-weight: bold;\n  }\n  .navigation__list {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-top: 0;\n    border-right: 0;\n  }\n  @media screen and (max-width: 400px) {\n    .navigation__item {\n      flex-basis: 100% /* Stops uneven wrapping */;\n    }\n  }\n  .navigation__toggle {\n    flex-shrink: 0 /* Stops more button collapsing */;\n    background: #fff;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n  }\n  .navigation__toggle .navigation__link {\n    position: relative;\n    padding-right: 50px;\n  }\n  /* More button arrow */\n  .navigation__toggle .navigation__link:after {\n    content: '';\n    position: absolute;\n    top: 22px;\n    right: 20px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 5px 5px 0 5px;\n    border-color: #000 transparent transparent transparent;\n  }\n  /* Flip the arrow when toggled */\n  .toggle:checked ~ .navigation__inner .navigation__toggle .navigation__link:after {\n    border-width: 0 5px 5px 5px;\n    border-color: transparent transparent #000 transparent;\n  }\n  /* Hide the checkbox */\n  .toggle {\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n  }\n\n  * {box-sizing: border-box}\nbody {font-family: Verdana, sans-serif; margin:0}\n.mySlides {display: none}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n}\n\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n}\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n/* Caption text */\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n@media only screen and (max-width: 300px) {\n  .prev, .next,.text {font-size: 11px}\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[" body {\n   display: flex;\n   flex-direction: column;\n   gap: 50px;\n }\n \n /* Dropdown Button */\n .dropbtn {\n    background-color: #3498DB;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n  }\n  \n  /* Dropdown button on hover & focus */\n  .dropbtn:hover, .dropbtn:focus {\n    background-color: #2980B9;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd}\n  \n  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n  .show {display:block;} \n\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    background: #e6e6e6;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  .navigation {\n    width: 100%;\n    border-bottom: 1px solid #ccc;\n    background: #fff;\n    height: 50px /* Collapsed navigation height */;\n  }\n  .navigation__inner {\n    display: flex;\n    max-width: 900px;\n    height: 50px /* Collapsed navigation height */;\n    margin: 0 auto;\n    overflow: hidden;\n  }\n  .toggle:checked ~ .navigation__inner {\n    height: auto /* Full height when more is toggled */;\n  }\n  .navigation__link {\n    display: block;\n    padding: 0 20px;\n    font-size: 14px;\n    line-height: 50px /* Collapsed navigation height */;\n    text-decoration: none;\n    color: #000;\n    cursor: pointer;\n  }\n  .navigation__link:hover {\n    text-decoration: underline;\n  }\n  .navigation__logo {\n    flex-shrink: 0 /* Stops logo collapsing */;\n    align-self: flex-start /* Stops logo stretching with list */;\n    border-left: 1px solid #ccc;\n  }\n  .navigation__logo .navigation__link {\n    font-weight: bold;\n  }\n  .navigation__list {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-top: 0;\n    border-right: 0;\n  }\n  @media screen and (max-width: 400px) {\n    .navigation__item {\n      flex-basis: 100% /* Stops uneven wrapping */;\n    }\n  }\n  .navigation__toggle {\n    flex-shrink: 0 /* Stops more button collapsing */;\n    background: #fff;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n  }\n  .navigation__toggle .navigation__link {\n    position: relative;\n    padding-right: 50px;\n  }\n  /* More button arrow */\n  .navigation__toggle .navigation__link:after {\n    content: '';\n    position: absolute;\n    top: 22px;\n    right: 20px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 5px 5px 0 5px;\n    border-color: #000 transparent transparent transparent;\n  }\n  /* Flip the arrow when toggled */\n  .toggle:checked ~ .navigation__inner .navigation__toggle .navigation__link:after {\n    border-width: 0 5px 5px 5px;\n    border-color: transparent transparent #000 transparent;\n  }\n  /* Hide the checkbox */\n  .toggle {\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n  }\n\n  * {box-sizing: border-box}\nbody {font-family: Verdana, sans-serif; margin:0}\n.mySlides {display: none}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n}\n\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n}\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n/* Caption text */\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n@media only screen and (max-width: 300px) {\n  .prev, .next,.text {font-size: 11px}\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeDropdown": () => (/* binding */ closeDropdown),
/* harmony export */   "showDropdown": () => (/* binding */ showDropdown)
/* harmony export */ });
function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function closeDropdown(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i+=1) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
}


/***/ }),

/***/ "./src/slideshow-logic.js":
/*!********************************!*\
  !*** ./src/slideshow-logic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentSlide": () => (/* binding */ currentSlide),
/* harmony export */   "plusSlides": () => (/* binding */ plusSlides),
/* harmony export */   "showSlides": () => (/* binding */ showSlides),
/* harmony export */   "slideIndex": () => (/* binding */ slideIndex),
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
let slideIndex = 1;
let timer = null;

function plusSlides(n) {
  console.log(slideIndex);
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
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
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");
/* harmony import */ var _slideshow_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow-logic */ "./src/slideshow-logic.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




window.addEventListener('click', _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.closeDropdown);

const dropbuttons = document.querySelectorAll('.dropbtn');

dropbuttons.forEach((dropbutton) => {
    dropbutton.addEventListener('click', _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.showDropdown);
});

(0,_slideshow_logic__WEBPACK_IMPORTED_MODULE_1__.showSlides)(_slideshow_logic__WEBPACK_IMPORTED_MODULE_1__.slideIndex);

const previous = document.querySelector('.prev');
previous.addEventListener('click', function () {
    (0,_slideshow_logic__WEBPACK_IMPORTED_MODULE_1__.plusSlides)(-1);
});

const next = document.querySelector('.next');
next.addEventListener('click', function () {
    (0,_slideshow_logic__WEBPACK_IMPORTED_MODULE_1__.plusSlides)(1);
});

const dots = document.querySelectorAll('.dot');

let i = 1;
dots.forEach((dot) => {
    console.log("run " + i);
    dot.addEventListener('click', function () {
        (0,_slideshow_logic__WEBPACK_IMPORTED_MODULE_1__.currentSlide)(i);
    });
    i += 1;
    console.log(i);
});

/*
dots.forEach((dot, i) => {
    console.log(i);
    dot.addEventListener('click', function () {
        currentSlide(i+1);
    });
});
*/

/*
for (let i=0; i<dots.length; i+=1) {
    dots[i].addEventListener('click', function () {
        currentSlide(i+1);
    });
}
*/

/*dots[0].addEventListener('click', function () {
    currentSlide(1);
});

dots[1].addEventListener('click', function () {
    currentSlide(2);
});

dots[2].addEventListener('click', function () {
    currentSlide(3);
});*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvc2xpZGVzaG93LWxvZ2ljLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiIGJvZHkge1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBnYXA6IDUwcHg7XFxuIH1cXG4gXFxuIC8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbiAuZHJvcGJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLyogRHJvcGRvd24gYnV0dG9uIG9uIGhvdmVyICYgZm9jdXMgKi9cXG4gIC5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XFxuICB9XFxuICBcXG4gIC8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXG4gIC5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG4gIFxcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGR9XFxuICBcXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXFxuICAuc2hvdyB7ZGlzcGxheTpibG9jazt9IFxcblxcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDUwcHggLyogQ29sbGFwc2VkIG5hdmlnYXRpb24gaGVpZ2h0ICovO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4IC8qIENvbGxhcHNlZCBuYXZpZ2F0aW9uIGhlaWdodCAqLztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAudG9nZ2xlOmNoZWNrZWQgfiAubmF2aWdhdGlvbl9faW5uZXIge1xcbiAgICBoZWlnaHQ6IGF1dG8gLyogRnVsbCBoZWlnaHQgd2hlbiBtb3JlIGlzIHRvZ2dsZWQgKi87XFxuICB9XFxuICAubmF2aWdhdGlvbl9fbGluayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHggLyogQ29sbGFwc2VkIG5hdmlnYXRpb24gaGVpZ2h0ICovO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAubmF2aWdhdGlvbl9fbGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX2xvZ28ge1xcbiAgICBmbGV4LXNocmluazogMCAvKiBTdG9wcyBsb2dvIGNvbGxhcHNpbmcgKi87XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgLyogU3RvcHMgbG9nbyBzdHJldGNoaW5nIHdpdGggbGlzdCAqLztcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX2xvZ28gLm5hdmlnYXRpb25fX2xpbmsge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5uYXZpZ2F0aW9uX19saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci10b3A6IDA7XFxuICAgIGJvcmRlci1yaWdodDogMDtcXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5uYXZpZ2F0aW9uX19pdGVtIHtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlIC8qIFN0b3BzIHVuZXZlbiB3cmFwcGluZyAqLztcXG4gICAgfVxcbiAgfVxcbiAgLm5hdmlnYXRpb25fX3RvZ2dsZSB7XFxuICAgIGZsZXgtc2hyaW5rOiAwIC8qIFN0b3BzIG1vcmUgYnV0dG9uIGNvbGxhcHNpbmcgKi87XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX3RvZ2dsZSAubmF2aWdhdGlvbl9fbGluayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIH1cXG4gIC8qIE1vcmUgYnV0dG9uIGFycm93ICovXFxuICAubmF2aWdhdGlvbl9fdG9nZ2xlIC5uYXZpZ2F0aW9uX19saW5rOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMnB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDAgNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAvKiBGbGlwIHRoZSBhcnJvdyB3aGVuIHRvZ2dsZWQgKi9cXG4gIC50b2dnbGU6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uX19pbm5lciAubmF2aWdhdGlvbl9fdG9nZ2xlIC5uYXZpZ2F0aW9uX19saW5rOmFmdGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDAgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAvKiBIaWRlIHRoZSBjaGVja2JveCAqL1xcbiAgLnRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAqIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxcbmJvZHkge2ZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmOyBtYXJnaW46MH1cXG4ubXlTbGlkZXMge2Rpc3BsYXk6IG5vbmV9XFxuaW1nIHt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cXG5cXG4vKiBTbGlkZXNob3cgY29udGFpbmVyICovXFxuLnNsaWRlc2hvdy1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXYsIC5uZXh0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogLTIycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIFBvc2l0aW9uIHRoZSBcXFwibmV4dCBidXR0b25cXFwiIHRvIHRoZSByaWdodCAqL1xcbi5uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG59XFxuXFxuLyogQ2FwdGlvbiB0ZXh0ICovXFxuLnRleHQge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xcbi5udW1iZXJ0ZXh0IHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi8qIFRoZSBkb3RzL2J1bGxldHMvaW5kaWNhdG9ycyAqL1xcbi5kb3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xcbn1cXG5cXG4uYWN0aXZlLCAuZG90OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XFxufVxcblxcbi8qIEZhZGluZyBhbmltYXRpb24gKi9cXG4uZmFkZSB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge29wYWNpdHk6IC40fSBcXG4gIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIGRlY3JlYXNlIHRleHQgc2l6ZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC5wcmV2LCAubmV4dCwudGV4dCB7Zm9udC1zaXplOiAxMXB4fVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQ0FBQztHQUNFLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsU0FBUztDQUNYOztDQUVBLG9CQUFvQjtDQUNwQjtJQUNHLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQSxxQ0FBcUM7RUFDckM7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUEsa0VBQWtFO0VBQ2xFO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQSx5Q0FBeUM7RUFDekM7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7RUFDWjs7RUFFQSw4QkFBOEI7RUFDOUI7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBLDRDQUE0QztFQUM1QywyQkFBMkIsc0JBQXNCOztFQUVqRCxxSUFBcUk7RUFDckksT0FBTyxhQUFhLENBQUM7O0VBRXJCO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsOENBQThDO0VBQ2hEO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtREFBbUQ7RUFDckQ7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMENBQTBDO0lBQzFDLDREQUE0RDtJQUM1RCwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRTtNQUNFLDRDQUE0QztJQUM5QztFQUNGO0VBQ0E7SUFDRSxpREFBaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQSxzQkFBc0I7RUFDdEI7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHNEQUFzRDtFQUN4RDtFQUNBLGdDQUFnQztFQUNoQztJQUNFLDJCQUEyQjtJQUMzQixzREFBc0Q7RUFDeEQ7RUFDQSxzQkFBc0I7RUFDdEI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQSxHQUFHLHNCQUFzQjtBQUMzQixNQUFNLGdDQUFnQyxFQUFFLFFBQVE7QUFDaEQsV0FBVyxhQUFhO0FBQ3hCLEtBQUssc0JBQXNCLENBQUM7O0FBRTVCLHdCQUF3QjtBQUN4QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBLDRDQUE0QztBQUM1QztFQUNFLFFBQVE7RUFDUiwwQkFBMEI7QUFDNUI7O0FBRUEseUVBQXlFO0FBQ3pFO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsTUFBTTtBQUNSOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLE1BQU0sV0FBVztFQUNqQixJQUFJLFVBQVU7QUFDaEI7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0Usb0JBQW9CLGVBQWU7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIGJvZHkge1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBnYXA6IDUwcHg7XFxuIH1cXG4gXFxuIC8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbiAuZHJvcGJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLyogRHJvcGRvd24gYnV0dG9uIG9uIGhvdmVyICYgZm9jdXMgKi9cXG4gIC5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XFxuICB9XFxuICBcXG4gIC8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXG4gIC5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG4gIFxcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGR9XFxuICBcXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXFxuICAuc2hvdyB7ZGlzcGxheTpibG9jazt9IFxcblxcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDUwcHggLyogQ29sbGFwc2VkIG5hdmlnYXRpb24gaGVpZ2h0ICovO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4IC8qIENvbGxhcHNlZCBuYXZpZ2F0aW9uIGhlaWdodCAqLztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAudG9nZ2xlOmNoZWNrZWQgfiAubmF2aWdhdGlvbl9faW5uZXIge1xcbiAgICBoZWlnaHQ6IGF1dG8gLyogRnVsbCBoZWlnaHQgd2hlbiBtb3JlIGlzIHRvZ2dsZWQgKi87XFxuICB9XFxuICAubmF2aWdhdGlvbl9fbGluayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHggLyogQ29sbGFwc2VkIG5hdmlnYXRpb24gaGVpZ2h0ICovO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAubmF2aWdhdGlvbl9fbGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX2xvZ28ge1xcbiAgICBmbGV4LXNocmluazogMCAvKiBTdG9wcyBsb2dvIGNvbGxhcHNpbmcgKi87XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgLyogU3RvcHMgbG9nbyBzdHJldGNoaW5nIHdpdGggbGlzdCAqLztcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX2xvZ28gLm5hdmlnYXRpb25fX2xpbmsge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5uYXZpZ2F0aW9uX19saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci10b3A6IDA7XFxuICAgIGJvcmRlci1yaWdodDogMDtcXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5uYXZpZ2F0aW9uX19pdGVtIHtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlIC8qIFN0b3BzIHVuZXZlbiB3cmFwcGluZyAqLztcXG4gICAgfVxcbiAgfVxcbiAgLm5hdmlnYXRpb25fX3RvZ2dsZSB7XFxuICAgIGZsZXgtc2hyaW5rOiAwIC8qIFN0b3BzIG1vcmUgYnV0dG9uIGNvbGxhcHNpbmcgKi87XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgfVxcbiAgLm5hdmlnYXRpb25fX3RvZ2dsZSAubmF2aWdhdGlvbl9fbGluayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIH1cXG4gIC8qIE1vcmUgYnV0dG9uIGFycm93ICovXFxuICAubmF2aWdhdGlvbl9fdG9nZ2xlIC5uYXZpZ2F0aW9uX19saW5rOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMnB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDAgNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAvKiBGbGlwIHRoZSBhcnJvdyB3aGVuIHRvZ2dsZWQgKi9cXG4gIC50b2dnbGU6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uX19pbm5lciAubmF2aWdhdGlvbl9fdG9nZ2xlIC5uYXZpZ2F0aW9uX19saW5rOmFmdGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDAgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAvKiBIaWRlIHRoZSBjaGVja2JveCAqL1xcbiAgLnRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAqIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxcbmJvZHkge2ZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmOyBtYXJnaW46MH1cXG4ubXlTbGlkZXMge2Rpc3BsYXk6IG5vbmV9XFxuaW1nIHt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cXG5cXG4vKiBTbGlkZXNob3cgY29udGFpbmVyICovXFxuLnNsaWRlc2hvdy1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXYsIC5uZXh0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogLTIycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIFBvc2l0aW9uIHRoZSBcXFwibmV4dCBidXR0b25cXFwiIHRvIHRoZSByaWdodCAqL1xcbi5uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG59XFxuXFxuLyogQ2FwdGlvbiB0ZXh0ICovXFxuLnRleHQge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xcbi5udW1iZXJ0ZXh0IHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi8qIFRoZSBkb3RzL2J1bGxldHMvaW5kaWNhdG9ycyAqL1xcbi5kb3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xcbn1cXG5cXG4uYWN0aXZlLCAuZG90OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XFxufVxcblxcbi8qIEZhZGluZyBhbmltYXRpb24gKi9cXG4uZmFkZSB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge29wYWNpdHk6IC40fSBcXG4gIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIGRlY3JlYXNlIHRleHQgc2l6ZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC5wcmV2LCAubmV4dCwudGV4dCB7Zm9udC1zaXplOiAxMXB4fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEcm9wZG93bihldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrPTEpIHtcbiAgICAgICAgICB2YXIgb3BlbkRyb3Bkb3duID0gZHJvcGRvd25zW2ldO1xuICAgICAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG59XG5leHBvcnQgeyBzaG93RHJvcGRvd24sIGNsb3NlRHJvcGRvd24gfTsiLCJsZXQgc2xpZGVJbmRleCA9IDE7XG5sZXQgdGltZXIgPSBudWxsO1xuXG5mdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcbiAgY29uc29sZS5sb2coc2xpZGVJbmRleCk7XG4gIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcbiAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gbik7XG59XG5cbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xuICBsZXQgaTtcbiAgbGV0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteVNsaWRlc1wiKTtcbiAgbGV0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xuICBpZiAobj09dW5kZWZpbmVkKXtuID0gKytzbGlkZUluZGV4fVxuICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cbiAgaWYgKG4gPCAxKSB7c2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGh9XG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gIH1cbiAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgdGltZXIgPSBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xufSBcblxuZXhwb3J0IHsgcGx1c1NsaWRlcywgY3VycmVudFNsaWRlLCBzaG93U2xpZGVzLCBzbGlkZUluZGV4LCB0aW1lciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc2hvd0Ryb3Bkb3duLCBjbG9zZURyb3Bkb3duIH0gZnJvbSAnLi9kb20tc3R1ZmYnO1xuaW1wb3J0IHsgcGx1c1NsaWRlcywgY3VycmVudFNsaWRlLCBzaG93U2xpZGVzLCBzbGlkZUluZGV4LCB0aW1lciB9IGZyb20gJy4vc2xpZGVzaG93LWxvZ2ljJztcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcblxuY29uc3QgZHJvcGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGJ0bicpO1xuXG5kcm9wYnV0dG9ucy5mb3JFYWNoKChkcm9wYnV0dG9uKSA9PiB7XG4gICAgZHJvcGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dEcm9wZG93bik7XG59KTtcblxuc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcblxuY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldicpO1xucHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgcGx1c1NsaWRlcygtMSk7XG59KTtcblxuY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0Jyk7XG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHBsdXNTbGlkZXMoMSk7XG59KTtcblxuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKTtcblxubGV0IGkgPSAxO1xuZG90cy5mb3JFYWNoKChkb3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJ1biBcIiArIGkpO1xuICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNsaWRlKGkpO1xuICAgIH0pO1xuICAgIGkgKz0gMTtcbiAgICBjb25zb2xlLmxvZyhpKTtcbn0pO1xuXG4vKlxuZG90cy5mb3JFYWNoKChkb3QsIGkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZShpKzEpO1xuICAgIH0pO1xufSk7XG4qL1xuXG4vKlxuZm9yIChsZXQgaT0wOyBpPGRvdHMubGVuZ3RoOyBpKz0xKSB7XG4gICAgZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNsaWRlKGkrMSk7XG4gICAgfSk7XG59XG4qL1xuXG4vKmRvdHNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFNsaWRlKDEpO1xufSk7XG5cbmRvdHNbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFNsaWRlKDIpO1xufSk7XG5cbmRvdHNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFNsaWRlKDMpO1xufSk7Ki8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=