describe('makeElement', function() {
    it('Проверка создания узла', function() {
        assert.equal(makeElement('р', 'red', 'Hi, world').outerHTML, '<р class="red">Hi, world</р>');
        assert.equal(makeElement('div', 'red', 'Hi, world').outerHTML, '<div class="red">Hi, world</div>');
        assert.equal(makeElement('div', 'red').outerHTML, '<div class="red"></div>');
    });
});

describe('maxValue', function() {
    it('Нахождение максимального значения, допустимое количество столбцов: 2 - 3', function() {
        var data = [
            'Год', 'Обычка', 'Префы',
            2008, 0.51, 0.65,
            2009, 0.48, 0.63,
            2010, 0.08, 0.45
        ];
        assert.equal(maxValue(data, 3), 0.65);
    });
});

describe('maxValue', function() {
    it('Нахождение максимального значения, допустимое количество столбцов: 2 - 3', function() {
        var data = [
            'Год', 'Обычка', 'Префы',
            2008, 0.51, 0.65,
            2009, 0.48, 0.63,
            2010, 0.08, 0.45
        ];
        assert.equal(maxValue(data, 3), 0.65);
    });
});