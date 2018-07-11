var makeElement = (tagName, className, text) => {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

/* The function of creating a table */
var createTable = (id, data, col) => {
    var area = document.getElementById(id);

    for (var i = 0; i < data.length; i = i + col) {
        for (var j = 0; j < col; j++) {
            var element = makeElement('div', 'table', data[i + j]);
            area.appendChild(element);
        }
        area.appendChild(makeElement('div', 'clear'));
    }
}

/* The function of creating a graph */
var createGraph = (id, data, col) => {
    var area = document.getElementById(id);
    var columnCorrection = 0.6; //changing the ratio between width column and indentation

    var makeColumn = (height, color, count) => {
        var fragment = document.createDocumentFragment();

        var value = makeElement('div', 'value', data[count]);
        value.style.width = (1 + columnCorrection) * elementWidth + '%';
        fragment.appendChild(value); // append value of column

        var column = makeElement('div', 'column'); // append column
        column.style.height = height;
        column.style.width = (1 + columnCorrection) * elementWidth + '%'; //width of the column
        column.style.backgroundColor = color;
        column.style.marginRight = (1 - columnCorrection) * elementWidth + '%'; //width of the indentation
        fragment.appendChild(column);
        return fragment;
    }

    var maxValue = (data, col) => { //definition of the maximum value in data
        var stack = data[col + 1];
        var start = col + 1;
        for (var i = start; i < data.length; i = i + col) {
            for (var j = 0; j < col - 1; j++) {
                if (data[i + j] > stack) {
                    stack = data[i + j];
                }
            }
            if (data[i] > stack) { stack = data[i]; }
        }
        return stack;
    }

    var columns = data.length - col - (data.length - col) / col;
    var elementWidth = 100 / columns / 2;
    for (var i = col + 1; i < data.length; i += col) {
        var height = data[i] / maxValue(data, col) * 300;
        var column = makeColumn(height + 'px', 'red', i);

        if (col === 3) {
            height = data[i + 1] / maxValue(data, col) * 300;
            column.appendChild(makeColumn(height + 'px', 'blue', i + 1));
        }
        var newYear = (makeElement('div', 'year', data[i - 1])); // append year
        newYear.style.width = (1 + columnCorrection) * elementWidth + '%';
        column.appendChild(newYear);
        var fullYear = document.createElement('div');
        fullYear.classList.add('fullYear');
        var widthFullYear;
        if (col === 2) { widthFullYear = 2 * elementWidth; } else { widthFullYear = 3 * elementWidth; }
        // console.log(widthFullYear); // 6.8 %
        fullYear.style.width = widthFullYear;

        fullYear.appendChild(column);
        area.appendChild(fullYear); // output year
    }
}

createTable('dividendsTable', dividends, 3);
createGraph('dividendsGraph', dividends, 3);