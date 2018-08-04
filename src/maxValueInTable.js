//definition of the maximum value in table
// 'col' - number of columns
// format incoming data:
// Names    Val1    Val2
// 2017     100     110
// 2018     200     190
export default function maxValueInTable(data, col) {
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