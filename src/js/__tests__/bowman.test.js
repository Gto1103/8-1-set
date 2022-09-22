import Bowman from '../bowman';

test('Correct create character Bowman', () => {
  const received = new Bowman('Viktor', 'Bowman');
  const expected = {
    name: 'Viktor',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
