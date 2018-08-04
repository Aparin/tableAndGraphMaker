describe('makeDOMelement', function() {
    it('Проверка создания узла', function() {
        assert.equal(makeDOMelement('р', 'red', 'Hi, world').outerHTML, '<р class="red">Hi, world</р>');
        assert.equal(makeDOMelement('div', 'red', 'Hi, world').outerHTML, '<div class="red">Hi, world</div>');
        assert.equal(makeDOMelement('div', 'red').outerHTML, '<div class="red"></div>');
    });
});

describe('maxValueInTable', function() {
    it('Нахождение максимального значения, допустимое количество столбцов: 2 - 3', function() {
        var data = [
            'Год', 'Обычка', 'Префы',
            2008, 0.51, 0.65,
            2009, 0.48, 0.63,
            2010, 0.08, 0.45
        ];
        assert.equal(maxValueInTable(data, 3), 0.65);
    });
});