document.write("<link rel='stylesheet' href='https://znanion.ru/scripts/graphMaker/style.css' type='text/css'>");
import { dividends, dividendsAn, prices, percent, dividendYield, speculativeYield }
from './sberbank';

function makeElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

//definition of the maximum value in data
function maxValue(data, col) {
    let stack = data[col + 1];
    let start = col + 1;
    for (let i = start; i < data.length; i = i + col) {
        for (let j = 0; j < col - 1; j++) {
            if (data[i + j] > stack) {
                stack = data[i + j];
            }
        }
        if (data[i] > stack) { stack = data[i]; }
    }
    return stack;
}

/* The function of creating a table */
function createTable(id, data, col) {
    const area = document.getElementById(id);

    for (let i = 0; i < data.length; i = i + col) {
        for (let j = 0; j < col; j++) {
            let element = makeElement('div', 'cell', data[i + j]);
            area.appendChild(element);
        }
        area.appendChild(makeElement('div', 'clear'));
    }
}

/* The function of creating a graph */
function createGraph(id, data, col) {
    const area = document.getElementById(id);
    /* */
    // make single column with value
    function makeColumn(height, color, count) {
        const wrap = makeElement('div', 'columnWrap');
        const fragment = document.createDocumentFragment();

        // append value of column
        const value = makeElement('div', 'value', data[count]);
        if (document.documentElement.clientWidth * elementWidth / 100 < 45) { value.classList.add("valueVertical"); } // turn text-line
        fragment.appendChild(value);

        // append column
        const column = makeElement('div', 'column');
        column.style.height = height;
        column.style.backgroundColor = color;
        fragment.appendChild(column);

        wrap.appendChild(fragment);
        return wrap;
    }

    const columns = data.length - col - (data.length - col) / col;
    const elementWidth = 100 / columns;

    for (let i = col + 1; i < data.length; i += col) {

        // make main element containing values, columns, year
        const fullYear = makeElement('div', 'fullYear');
        let widthFullYear;
        if (col === 2) { widthFullYear = elementWidth; } else { widthFullYear = 2 * elementWidth; }
        fullYear.style.width = widthFullYear + '%';

        // single column width and indentation
        const widthsCol = () => {
            const cw = 100 / (col - 1);
            const w = 0.90;
            column.style.width = w * cw + '%';
            const m = (1 - w) / 2 * cw + '%';
            column.style.marginLeft = m;
            column.style.marginRight = m;
        }
        const height = i => { return data[i] / maxValue(data, col) * 300 + 'px'; }
        let column = makeColumn(height(i), 'red', i);
        widthsCol();
        fullYear.appendChild(column);

        if (col === 3) {
            column = makeColumn(height(i + 1), 'blue', i + 1);
            widthsCol();
            fullYear.appendChild(column);
        }

        const year = (makeElement('div', 'year', data[i - 1])); // append year
        if (document.documentElement.clientWidth * elementWidth / 100 * 2 < 45) { year.classList.add("yearVertical"); }
        fullYear.appendChild(year);


        area.appendChild(fullYear); // output year
    }
}

createTable('dividendsTable', dividends, 3);
createGraph('dividendsGraph', dividends, 3);

createTable('dividendsAnTable', dividendsAn, 3);
createGraph('dividendsAnGraph', dividendsAn, 3);

// Percent of net profit, aimed on dividends
createTable('percentTable', percent, 2);
createGraph('percentGraph', percent, 2);

createTable('pricesTable', prices, 3);
createGraph('pricesGraph', prices, 3);

// dividend's yield
createTable('dividendYieldTable', dividendYield, 3);
createGraph('dividendYieldGraph', dividendYield, 3);

// speculative yield
createTable('speculativeYieldTable', speculativeYield, 3);