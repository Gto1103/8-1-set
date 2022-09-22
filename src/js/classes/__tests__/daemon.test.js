import Daemon from '../daemon';

test('Correct create character Daemon', () => {
  const received = new Daemon('Zahar');
  const expected = {
    name: 'Zahar',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
