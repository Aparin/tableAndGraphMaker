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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sberbank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sberbank */ \"./src/sberbank.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n/* harmony import */ var _maxValueInTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maxValueInTable */ \"./src/maxValueInTable.js\");\n/* harmony import */ var _makeDOMelement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeDOMelement */ \"./src/makeDOMelement.js\");\n// document.write(\"<link rel='stylesheet' href='https://znanion.ru/scripts/graphMaker/style.css' type='text/css'>\");\n\n\ndocument.write(`<style>${_style__WEBPACK_IMPORTED_MODULE_1__[\"css\"]}</style>`);\n\n\n/* The function of creating a table */\nfunction createTable(id, data, col) {\n    const area = document.getElementById(id);\n\n    for (let i = 0; i < data.length; i = i + col) {\n        for (let j = 0; j < col; j++) {\n            let element = Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'cell', data[i + j]);\n            area.appendChild(element);\n        }\n        area.appendChild(Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'clear'));\n    }\n}\n\n/* The function of creating a graph */\nfunction createGraph(id, data, col) {\n    const area = document.getElementById(id);\n    /* */\n    // make single column with value\n    function makeColumn(height, color, count) {\n        const wrap = Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'columnWrap');\n        const fragment = document.createDocumentFragment();\n\n        // append value of column\n        const value = Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'value', data[count]);\n        if (document.documentElement.clientWidth * elementWidth / 100 < 45) { value.classList.add(\"valueVertical\"); } // turn text-line\n        fragment.appendChild(value);\n\n        // append column\n        const column = Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'column');\n        column.style.height = height;\n        column.style.backgroundColor = color;\n        fragment.appendChild(column);\n\n        wrap.appendChild(fragment);\n        return wrap;\n    }\n\n    const columns = data.length - col - (data.length - col) / col;\n    const elementWidth = 100 / columns;\n\n    for (let i = col + 1; i < data.length; i += col) {\n\n        // make main element containing values, columns, year\n        const fullYear = Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'fullYear');\n        let widthFullYear;\n        if (col === 2) { widthFullYear = elementWidth; } else { widthFullYear = 2 * elementWidth; }\n        fullYear.style.width = widthFullYear + '%';\n\n        // single column width and indentation\n        const widthsCol = () => {\n            const cw = 100 / (col - 1);\n            const w = 0.90;\n            column.style.width = w * cw + '%';\n            const m = (1 - w) / 2 * cw + '%';\n            column.style.marginLeft = m;\n            column.style.marginRight = m;\n        }\n        const height = i => { return data[i] / Object(_maxValueInTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, col) * 300 + 'px'; }\n        let column = makeColumn(height(i), 'red', i);\n        widthsCol();\n        fullYear.appendChild(column);\n\n        if (col === 3) {\n            column = makeColumn(height(i + 1), 'blue', i + 1);\n            widthsCol();\n            fullYear.appendChild(column);\n        }\n\n        const year = (Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'year', data[i - 1])); // append year\n        if (document.documentElement.clientWidth * elementWidth / 100 * 2 < 45) { year.classList.add(\"yearVertical\"); }\n        fullYear.appendChild(year);\n\n\n        area.appendChild(fullYear); // output year\n    }\n}\n\ncreateTable('dividendsTable', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"dividends\"], 3);\ncreateGraph('dividendsGraph', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"dividends\"], 3);\n\ncreateTable('dividendsAnTable', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"dividendsAn\"], 3);\ncreateGraph('dividendsAnGraph', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"dividendsAn\"], 3);\n\n// Percent of net profit, aimed on dividends\ncreateTable('percentTable', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"percent\"], 2);\ncreateGraph('percentGraph', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"percent\"], 2);\n\ncreateTable('pricesTable', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"prices\"], 3);\ncreateGraph('pricesGraph', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"prices\"], 3);\n\n// dividend's yield\ncreateTable('dividendYieldTable', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"dividendYield\"], 3);\ncreateGraph('dividendYieldGraph', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"dividendYield\"], 3);\n\n// speculative yield\ncreateTable('speculativeYieldTable', _sberbank__WEBPACK_IMPORTED_MODULE_0__[\"speculativeYield\"], 3);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/makeDOMelement.js":
/*!*******************************!*\
  !*** ./src/makeDOMelement.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeDOMelement; });\nfunction makeDOMelement(tagName, className, text) {\r\n    const element = document.createElement(tagName);\r\n    element.classList.add(className);\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    return element;\r\n};\n\n//# sourceURL=webpack:///./src/makeDOMelement.js?");

/***/ }),

/***/ "./src/maxValueInTable.js":
/*!********************************!*\
  !*** ./src/maxValueInTable.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return maxValueInTable; });\n//definition of the maximum value in table\r\n// 'col' - number of columns\r\n// format incoming data:\r\n// Names    Val1    Val2\r\n// 2017     100     110\r\n// 2018     200     190\r\nfunction maxValueInTable(data, col) {\r\n    let stack = data[col + 1];\r\n    let start = col + 1;\r\n    for (let i = start; i < data.length; i = i + col) {\r\n        for (let j = 0; j < col - 1; j++) {\r\n            if (data[i + j] > stack) {\r\n                stack = data[i + j];\r\n            }\r\n        }\r\n        if (data[i] > stack) { stack = data[i]; }\r\n    }\r\n    return stack;\r\n}\n\n//# sourceURL=webpack:///./src/maxValueInTable.js?");

/***/ }),

/***/ "./src/sberbank.js":
/*!*************************!*\
  !*** ./src/sberbank.js ***!
  \*************************/
/*! exports provided: dividends, dividendsAn, prices, percent, dividendYield, speculativeYield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dividends\", function() { return dividends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dividendsAn\", function() { return dividendsAn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prices\", function() { return prices; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"percent\", function() { return percent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dividendYield\", function() { return dividendYield; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"speculativeYield\", function() { return speculativeYield; });\nconst dividends = [\n    'Год', 'Обычка', 'Префы',\n    2008, 0.51, 0.65,\n    2009, 0.48, 0.63,\n    2010, 0.08, 0.45,\n    2011, 0.92, 1.15,\n    2012, 2.08, 2.59,\n    2013, 2.57, 3.20,\n    2014, 3.20, 3.20,\n    2015, 0.45, 0.45,\n    2016, 1.97, 1.97,\n    2017, 6, 6,\n    2018, 12, 12\n];\nconst dividendsAn = [\n    'Год', 'Обычка', 'Префы',\n    2002, 52.85, 1.14,\n    2003, 109, 2.32,\n    2004, 134.5, 2.88,\n    2005, 173.9, 3.79,\n    2006, 266, 5.9,\n    2007, 385.5, 9.3\n];\n\nconst prices = [\n    'Год', 'Обычка', 'Префы',\n    2008, 22.79, 9.06,\n    2009, 82.94, 69.00,\n    2010, 104.18, 75.10,\n    2011, 79.40, 59.24,\n    2012, 92.94, 67.30,\n    2013, 101.17, 80.21,\n    2014, 54.90, 37.70,\n    2015, 101.26, 76.50,\n    2016, 173.25, 129.75,\n    2017, 225.20, 189.00\n];\n\n// Percent of net profit, aimed on dividends\nconst percent = [\n    'Год', 'Процент',\n    2001, 6,\n    2002, 7,\n    2003, 8,\n    2004, 8,\n    2005, 8.5,\n    2006, 10,\n    2007, 10,\n    2008, 10,\n    2009, 10,\n    2010, 12,\n    2011, 15.3,\n    2012, 17,\n    2013, 20,\n    2014, 3.5,\n    2015, 20,\n    2016, 25,\n    2017, 41.5\n];\nconst dividendYield = [\n    'Год', 'Обычка', 'Префы',\n    2008, 2.1, 7,\n    2009, 0.1, 0.7,\n    2010, 0.9, 1.5,\n    2011, 2.6, 4.4,\n    2012, 2.8, 4.8,\n    2013, 3.2, 4,\n    2014, 0.8, 1.2,\n    2015, 1.9, 2.6,\n    2016, 3.5, 4.6,\n    2017, 5.3, 6.4\n];\nconst speculativeYield = [\n    'Год', 'Обычка', 'Префы',\n    2009, 264, 662,\n    2010, 26, 9,\n    2011, -24, -21,\n    2012, 17, 14,\n    2013, 9, 19,\n    2014, -46, -53,\n    2015, 84, 103,\n    2016, 71, 70,\n    2017, 30, 46,\n    'Среднее', 48, 94\n];\n\n\n\n//# sourceURL=webpack:///./src/sberbank.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\nvar css = `\n/* ---------- table ---------- */\n\n.table {\n    width: 300px;\n    margin: 0 auto;\n}\n\n.cell {\n    float: left;\n    padding: 3px;\n    border: 1px dotted lightgrey;\n    width: 90px;\n    text-align: center;\n}\n\n.clear {\n    clear: both;\n}\n\n\n/* ---------- graph ---------- */\n\n.graph {\n    width: 100%;\n    margin: 10px 0px;\n    border-left: 2px dotted gray;\n    border-bottom: 2px dotted gray;\n    padding-bottom: 10px;\n    padding-left: 5px;\n}\n\n.value,\n.year {\n    text-align: center;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 14px;\n    padding-bottom: 4px;\n}\n\n.valueVertical {\n    transform: rotate(-90deg);\n    transform-origin: left top;\n    position: relative;\n    margin-bottom: -20px;\n    margin-left: -5px;\n    color: gray;\n}\n\n.year {\n    display: block;\n    background: lightgray;\n    width: 92%;\n    margin: 4px 2% 4px 2%;\n    padding: 2%;\n    padding-bottom: 4px;\n}\n\n.yearVertical {\n    transform: rotate(-45deg);\n    transform-origin: 75% bottom;\n    margin-right: 5px;\n    background: none;\n}\n\n.columnWrap {\n    display: inline-block;\n    vertical-align: bottom;\n}\n\n.fullYear {\n    display: inline-block;\n}\n`;\n\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ })

/******/ });