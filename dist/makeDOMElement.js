"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeDOMelement;
function makeDOMelement(tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};