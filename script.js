/* Вариант для локальной машины */
//document.write("<style>.table {border: 1 dotted gray;}</style>");

/* Не работает
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
include('data.js');
*/

var makeElement = function(tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

var area = document.getElementById('dividends');

createTable = function(date, col) {
    for (var i = 0; i < date.length; i = i + col) {
        for (var j = 0; j < col; j++) {
            var element = makeElement('td', 'element', date[i + j]);
            area.appendChild(element);
        }
        area.appendChild(makeElement('div', 'clear'));
    }
    return line;
}
var newTable = createTable(dividends, 3);
/*
 var line = '';
        for (var j = 1; j <= col; j++) {
            var numberElement = i * col + j;
            line += makeElement('td', 'table', date[numberElement]);
        }
*/
// area.appendChild(newTable);
//document.writeln(newTable);