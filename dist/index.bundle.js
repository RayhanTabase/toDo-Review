/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #f6f6f6;\\r\\n  font-family: 'Times New Roman', Times, serif;\\r\\n}\\r\\n\\r\\n#main {\\r\\n  width: 99%;\\r\\n  min-width: 99%;\\r\\n  max-width: 99%;\\r\\n  height: 99vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.toDoListContainer {\\r\\n  width: 40em;\\r\\n  max-width: 90%;\\r\\n  min-width: 40em;\\r\\n  border: 2px solid #f6f6f6;\\r\\n  box-shadow: 0.2em 0.2em 0.2em 0.2em rgba(179, 184, 182, 0.603);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.toDoListContainer .container-list {\\r\\n  padding-left: 1.3em;\\r\\n  padding-right: 1.3em;\\r\\n  border-bottom: 2px solid #dfdfdf;\\r\\n  background: #fff;\\r\\n  height: 5em;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\ninput[type=checkbox]:hover,\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clearCompleted button {\\r\\n  height: 100%;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-size: 1.1rem;\\r\\n  color: #a3a3a3;\\r\\n}\\r\\n\\r\\n.toDoListContainer .container-list button {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: rgb(182, 182, 182);\\r\\n  margin-left: 1em;\\r\\n}\\r\\n\\r\\n.toDoListContainer .container-list button:hover {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: rgb(82, 82, 82);\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  font-style: italic;\\r\\n  color: #a3a3a3;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\np,\\r\\ninput[type='text'] {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.inputNew input {\\r\\n  font-style: italic;\\r\\n  font-size: 1.2rem;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.inputNew input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.toDoList {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.toDoItem .checkbox {\\r\\n  width: 2em;\\r\\n  height: 20%;\\r\\n  margin-right: 1em;\\r\\n}\\r\\n\\r\\n.toDoItem .edit-input {\\r\\n  flex: 4;\\r\\n}\\r\\n\\r\\n.toDoItem .button {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.clearCompleted {\\r\\n  height: 5em;\\r\\n  display: flex;\\r\\n  border-bottom: none;\\r\\n  background: #f6f6f6;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\ninput[type=checkbox]:checked {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  appearance: none;\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n}\\r\\n\\r\\ninput[type=checkbox]:checked::after {\\r\\n  content: \\\"\\\\2713\\\";\\r\\n  font-size: 1.6rem;\\r\\n  color: #7b9cee;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.toDoItem.container-list.editing {\\r\\n  background: #dddcaa;\\r\\n}\\r\\n\\r\\n.item-description.crossed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.toDoItem.container-list.editing input[type='text']:hover {\\r\\n  cursor: text;\\r\\n}\\r\\n\\r\\n.toDoItem.container-list .move-button:hover {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.toDoItem.container-list .delete-button {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.toDoItem.container-list .item-description {\\r\\n  width: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HtmlToDo)\n/* harmony export */ });\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\nclass HtmlToDo {\r\n  // Edit mode\r\n  static toggleEditable(listElement) {\r\n    document.querySelectorAll('.toDoItem').forEach((element) => {\r\n      const edit = element.querySelector('.item-description');\r\n      const deleteBtn = element.querySelector('.delete-button');\r\n      const moveBtn = element.querySelector('.move-button');\r\n\r\n      if (element === listElement) {\r\n        deleteBtn.style.display = 'block';\r\n        moveBtn.style.display = 'none';\r\n        edit.readOnly = false;\r\n        element.classList.add('editing');\r\n      } else {\r\n        deleteBtn.style.display = 'none';\r\n        moveBtn.style.display = 'block';\r\n        edit.readOnly = true;\r\n        element.classList.remove('editing');\r\n      }\r\n    });\r\n  }\r\n\r\n  // Create list element\r\n  static createListItem(item) {\r\n    const listUl = document.querySelector('.toDoList');\r\n    const listElement = document.createElement('div');\r\n    listElement.classList.add('toDoItem');\r\n    listElement.classList.add('container-list');\r\n    listElement.style.order = item.index;\r\n\r\n    let crossed = '';\r\n    if (item.completed) {\r\n      crossed = 'crossed';\r\n    }\r\n\r\n    listElement.innerHTML = `\r\n     <input type=\"checkbox\" class=\"checkbox\">\r\n     <form class=\"edit-input\"> <input type=\"text\" name=\"title\" class=\"item-description ${crossed}\" value=\"${item.description}\" readonly></form>\r\n     <button type=\"button\" class=\"button move-button\"><i class=\"fas fa-ellipsis-v\"></i></button>\r\n     <button type=\"button\" class=\"button delete-button\"><i class=\"fas fa-trash-alt\"></i></button>\r\n    `;\r\n\r\n    // Add  status changer\r\n    const completed = listElement.querySelector('.checkbox');\r\n    completed.checked = item.completed;\r\n    completed.addEventListener('change', (e) => {\r\n      _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeStatus(item.index, e.target.checked);\r\n      listElement.querySelector('.item-description').classList.toggle('crossed');\r\n    });\r\n\r\n    // Add delete feature\r\n    const deleteBtn = listElement.querySelector('.delete-button');\r\n    deleteBtn.addEventListener('click', () => {\r\n      _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](item.index);\r\n      listElement.remove();\r\n    });\r\n\r\n    // Handle edit form\r\n    const editForm = listElement.querySelector('.edit-input');\r\n    editForm.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      const data = new FormData(editForm);\r\n      const newName = data.get('title');\r\n      _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(newName, item.index);\r\n    });\r\n\r\n    // Toggle edit\r\n    listElement.querySelector('.item-description').addEventListener('click', () => HtmlToDo.toggleEditable(listElement));\r\n\r\n    listUl.append(listElement);\r\n  }\r\n\r\n  // Append list items\r\n  static createListStructure() {\r\n    document.querySelector('.toDoList').innerHTML = '';\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getList().forEach((item) => {\r\n      HtmlToDo.createListItem(item);\r\n    });\r\n  }\r\n\r\n  // Create initial to-do list structure\r\n  static createStructure() {\r\n    const element = document.createElement('div');\r\n    element.className = 'toDoListContainer';\r\n\r\n    // Create header section\r\n    const header = document.createElement('div');\r\n    header.classList.add('container-list');\r\n    header.innerHTML = `\r\n      <p class=\"header\">Today's To Do</p>\r\n      <button type=\"button\" class=\"button\"><i class=\"fas fa-sync\"></i></button>\r\n    `;\r\n    header.style.order = 0;\r\n    element.appendChild(header);\r\n\r\n    // Create add section\r\n    const add = document.createElement('form');\r\n    add.classList.add('inputNew');\r\n    add.classList.add('container-list');\r\n\r\n    add.innerHTML = `\r\n      <input placeholder=\"Add to your list...\" name=\"title\" id=\"addToListInput\"> \r\n      <button type=\"submit\" class=\"button\"><i class=\"fas fa-reply\"></i></button>\r\n    `;\r\n    add.style.order = 1;\r\n    add.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      const data = new FormData(add);\r\n      let newItem = data.get('title');\r\n      newItem = _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(newItem);\r\n      if (newItem) {\r\n        HtmlToDo.createListItem(newItem);\r\n      }\r\n      add.reset();\r\n    });\r\n    element.appendChild(add);\r\n\r\n    // Create list ul\r\n    const listUl = document.createElement('div');\r\n    listUl.classList.add('toDoList');\r\n    listUl.style.order = 2;\r\n    element.appendChild(listUl);\r\n\r\n    // Add clear completed\r\n    const clearCompleted = document.createElement('div');\r\n    clearCompleted.classList.add('clearCompleted');\r\n    clearCompleted.style.order = 3;\r\n    clearCompleted.innerHTML = '<button type=\"button\">Clear all completed</button>';\r\n    clearCompleted.querySelector('button').addEventListener('click', () => {\r\n      _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteCompleted();\r\n      HtmlToDo.createListStructure();\r\n    });\r\n    element.appendChild(clearCompleted);\r\n\r\n    // Append to main content\r\n    const container = document.querySelector('#main');\r\n    return container.appendChild(element);\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/html.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.js */ \"./src/html.js\");\n\r\n\r\n\r\n_html_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createStructure();\r\n_html_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createListStructure();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/listItem.js":
/*!*************************!*\
  !*** ./src/listItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ListItem)\n/* harmony export */ });\nclass ListItem {\r\n  constructor(description, index) {\r\n    this.description = description;\r\n    this.index = index;\r\n    this.completed = false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/listItem.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\nclass LocalStorage {\r\n  // retrieve to-do list\r\n  static getList() {\r\n    let toDoList = JSON.parse(localStorage.getItem('toDoList'));\r\n    if (!toDoList) {\r\n      toDoList = [];\r\n    }\r\n    return toDoList;\r\n  }\r\n\r\n  // save list to local storage\r\n  static save(list) {\r\n    localStorage.setItem('toDoList', JSON.stringify(list));\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _listItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItem.js */ \"./src/listItem.js\");\n\r\n\r\n\r\nclass ToDoList {\r\n  // change status(completed) of to-do item\r\n  static changeStatus(index, status) {\r\n    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n    const listItem = model.find((item) => item.index === index);\r\n    listItem.completed = status;\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(model);\r\n  }\r\n\r\n  // Add\r\n  static add(newInput) {\r\n    // Add if input is not empty\r\n    if (newInput.trim().length > 0) {\r\n      const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n      const newIndex = model.length + 1;\r\n      const newItem = new _listItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newInput, newIndex);\r\n      model.push(newItem);\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(model);\r\n      return newItem;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  // Update\r\n  static update(description, index) {\r\n    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n    const listItem = model.find((item) => item.index === index);\r\n    listItem.description = description;\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(model);\r\n  }\r\n\r\n  // Delete\r\n  static delete(index) {\r\n    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n    let newModel = model.filter((item) => item.index !== index);\r\n    newModel = this.reAssignIndex(newModel);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(newModel);\r\n  }\r\n\r\n  // Delete completed\r\n  static deleteCompleted() {\r\n    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n    let newModel = model.filter((item) => item.completed === false);\r\n    newModel = this.reAssignIndex(newModel);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save(newModel);\r\n  }\r\n\r\n  // Adjusts list index values to match actual index\r\n  static reAssignIndex(model) {\r\n    model.forEach((item, index) => {\r\n      item.index = index + 1;\r\n    });\r\n    return model;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/toDo.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;