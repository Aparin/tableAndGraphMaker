"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var css = "\n/* ---------- table ---------- */\n\n.table {\n    width: 300px;\n    margin: 0 auto;\n}\n\n.cell {\n    float: left;\n    padding: 3px;\n    border: 1px dotted lightgrey;\n    width: 90px;\n    text-align: center;\n}\n\n.clear {\n    clear: both;\n}\n\n\n/* ---------- graph ---------- */\n\n.graph {\n    width: 100%;\n    margin: 10px 0px;\n    border-left: 2px dotted gray;\n    border-bottom: 2px dotted gray;\n    padding-bottom: 10px;\n    padding-left: 5px;\n}\n\n.value,\n.year {\n    text-align: center;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 14px;\n    padding-bottom: 4px;\n}\n\n.valueVertical {\n    transform: rotate(-90deg);\n    transform-origin: left top;\n    position: relative;\n    margin-bottom: -20px;\n    margin-left: -5px;\n    color: gray;\n}\n\n.year {\n    display: block;\n    background: lightgray;\n    width: 92%;\n    margin: 4px 2% 4px 2%;\n    padding: 2%;\n    padding-bottom: 4px;\n}\n\n.yearVertical {\n    transform: rotate(-45deg);\n    transform-origin: 75% bottom;\n    margin-right: 5px;\n    background: none;\n}\n\n.columnWrap {\n    display: inline-block;\n    vertical-align: bottom;\n}\n\n.fullYear {\n    display: inline-block;\n}\n";
exports.css = css;