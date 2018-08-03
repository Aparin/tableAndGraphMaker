'use strict';

var _sberbank = require('./sberbank');

var _style = require('./style');

// document.write("<link rel='stylesheet' href='https://znanion.ru/scripts/graphMaker/style.css' type='text/css'>");
document.write('<style>' + _style.css + '</style>');

function makeElement(tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

//definition of the maximum value in data
function maxValue(data, col) {
    var stack = data[col + 1];
    var start = col + 1;
    for (var i = start; i < data.length; i = i + col) {
        for (var j = 0; j < col - 1; j++) {
            if (data[i + j] > stack) {
                stack = data[i + j];
            }
        }
        if (data[i] > stack) {
            stack = data[i];
        }
    }
    return stack;
}

/* The function of creating a table */
function createTable(id, data, col) {
    var area = document.getElementById(id);

    for (var i = 0; i < data.length; i = i + col) {
        for (var j = 0; j < col; j++) {
            var element = makeElement('div', 'cell', data[i + j]);
            area.appendChild(element);
        }
        area.appendChild(makeElement('div', 'clear'));
    }
}

/* The function of creating a graph */
function createGraph(id, data, col) {
    var area = document.getElementById(id);
    /* */
    // make single column with value
    function makeColumn(height, color, count) {
        var wrap = makeElement('div', 'columnWrap');
        var fragment = document.createDocumentFragment();

        // append value of column
        var value = makeElement('div', 'value', data[count]);
        if (document.documentElement.clientWidth * elementWidth / 100 < 45) {
            value.classList.add("valueVertical");
        } // turn text-line
        fragment.appendChild(value);

        // append column
        var column = makeElement('div', 'column');
        column.style.height = height;
        column.style.backgroundColor = color;
        fragment.appendChild(column);

        wrap.appendChild(fragment);
        return wrap;
    }

    var columns = data.length - col - (data.length - col) / col;
    var elementWidth = 100 / columns;

    var _loop = function _loop(i) {

        // make main element containing values, columns, year
        var fullYear = makeElement('div', 'fullYear');
        var widthFullYear = void 0;
        if (col === 2) {
            widthFullYear = elementWidth;
        } else {
            widthFullYear = 2 * elementWidth;
        }
        fullYear.style.width = widthFullYear + '%';

        // single column width and indentation
        var widthsCol = function widthsCol() {
            var cw = 100 / (col - 1);
            var w = 0.90;
            column.style.width = w * cw + '%';
            var m = (1 - w) / 2 * cw + '%';
            column.style.marginLeft = m;
            column.style.marginRight = m;
        };
        var height = function height(i) {
            return data[i] / maxValue(data, col) * 300 + 'px';
        };
        var column = makeColumn(height(i), 'red', i);
        widthsCol();
        fullYear.appendChild(column);

        if (col === 3) {
            column = makeColumn(height(i + 1), 'blue', i + 1);
            widthsCol();
            fullYear.appendChild(column);
        }

        var year = makeElement('div', 'year', data[i - 1]); // append year
        if (document.documentElement.clientWidth * elementWidth / 100 * 2 < 45) {
            year.classList.add("yearVertical");
        }
        fullYear.appendChild(year);

        area.appendChild(fullYear); // output year
    };

    for (var i = col + 1; i < data.length; i += col) {
        _loop(i);
    }
}

createTable('dividendsTable', _sberbank.dividends, 3);
createGraph('dividendsGraph', _sberbank.dividends, 3);

createTable('dividendsAnTable', _sberbank.dividendsAn, 3);
createGraph('dividendsAnGraph', _sberbank.dividendsAn, 3);

// Percent of net profit, aimed on dividends
createTable('percentTable', _sberbank.percent, 2);
createGraph('percentGraph', _sberbank.percent, 2);

createTable('pricesTable', _sberbank.prices, 3);
createGraph('pricesGraph', _sberbank.prices, 3);

// dividend's yield
createTable('dividendYieldTable', _sberbank.dividendYield, 3);
createGraph('dividendYieldGraph', _sberbank.dividendYield, 3);

// speculative yield
createTable('speculativeYieldTable', _sberbank.speculativeYield, 3);