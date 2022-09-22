import Character from '../character';

test('Throw - name < 2 symbols', () => {
  const received = () => new Character('A', 'Bowman');
  const expected = 'Некорректная длина имени (от 2 до 10 символов)';
  expect(received).toThrow(expected);
});

test('Throw - name > 10 symbols', () => {
  const received = () => new Character('ABCDEFGHIJK', 'Bowman');
  const expected = 'Некорректная длина имени (от 2 до 10 символов)';
  expect(received).toThrow(expected);
});

test('Throw - character is not usage', () => {
  const received = () => new Character('Viktor', 'Bowerman');
  const expected = 'Такого класса персонажа не существует! Попробуйте другой.';
  expect(received).toThrow(expected);
});

test('Correct create character', () => {
  const received = new Character('Viktor', 'Bowman');
  const expected = {
    name: 'Viktor',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});
