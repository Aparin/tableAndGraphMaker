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

    // make single column with value
    var makeColumn = (height, color, count) => {
        var wrap = makeElement('div', 'columnWrap');
        var fragment = document.createDocumentFragment();

        // append value of column
        var value = makeElement('div', 'value', data[count]);
        fragment.appendChild(value);

        // append column
        var column = makeElement('div', 'column');
        column.style.height = height;
        column.style.backgroundColor = color;
        fragment.appendChild(column);

        wrap.appendChild(fragment);
        return wrap;
    }

    //definition of the maximum value in data
    var maxValue = (data, col) => {
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
    var elementWidth = 100 / columns;
    for (var i = col + 1; i < data.length; i += col) {

        // make main element containing values, columns, year
        var fullYear = makeElement('div', 'fullYear');
        var widthFullYear;
        if (col === 2) { widthFullYear = elementWidth; } else { widthFullYear = 2 * elementWidth; }
        fullYear.style.width = widthFullYear + '%';

        var height = i => { return data[i] / maxValue(data, col) * 300 + 'px'; }
        var column = makeColumn(height(i), 'red', i);
        column.style.width = 45 + '%';
        fullYear.appendChild(column);
        if (col === 3) {
            column = makeColumn(height(i + 1), 'blue', i + 1);
            column.style.width = 45 + '%';
            fullYear.appendChild(column);
        }

        var year = (makeElement('div', 'year', data[i - 1])); // append year
        fullYear.appendChild(year);


        area.appendChild(fullYear); // output year
    }
}

createTable('dividendsTable', dividends, 3);
createGraph('dividendsGraph', dividends, 3);