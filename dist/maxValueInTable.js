"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maxValueInTable;
//definition of the maximum value in table
// 'col' - number of columns
// format incoming data:
// Names    Val1    Val2
// 2017     100     110
// 2018     200     190
function maxValueInTable(data, col) {
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