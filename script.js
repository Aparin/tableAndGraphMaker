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

    var makeCollumn = (height, color, count) => {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(makeElement('div', 'value', data[count])); // append value of column
        var element = makeElement('div', 'column'); // append column
        element.style.height = height;
        var collumnCorrection = 0.6; //changing the ratio between width collumn and indentation
        element.style.width = (1 + collumnCorrection) * elementWidth + '%'; //width of the collumn
        element.style.backgroundColor = color;
        element.style.marginRight = (1 - collumnCorrection) * elementWidth + '%'; //width of the indentation
        fragment.appendChild(element);
        return fragment;
        // area.appendChild(fragment);
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

    var collumns = data.length - col - (data.length - col) / col;
    var elementWidth = 100 / collumns / 2;
    for (var i = col + 1; i < data.length; i += col) {
        var height = data[i] / maxValue(data, col) * 300;
        var newYear = makeCollumn(height + 'px', 'red', i);

        if (col === 3) {
            height = data[i + 1] / maxValue(data, col) * 300;
            newYear.appendChild(makeCollumn(height + 'px', 'blue', i + 1));
        }
        newYear.appendChild(makeElement('div', 'year', data[i - 1])); // append year
        area.appendChild(newYear); // output year
    }
}

createTable('dividendsTable', dividends, 3);
createGraph('dividendsGraph', dividends, 3);