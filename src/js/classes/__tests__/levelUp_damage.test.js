import Bowman from '../bowman';

test('Throw - health Bowman = 0', () => {
  const player = new Bowman('Viktor');
  player.health = 0;
  const received = () => player.levelUp();
  const expected = 'Нельзя повысить уровень умершего!';
  expect(received).toThrow(expected);
});

test('Correct method levelUp and attack, damage + 20%', () => {
  const received = new Bowman('Viktor');
  received.levelUp();
  const expected = {
    name: 'Viktor',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});

test('Method damage not used, health = 0', () => {
  const received = new Bowman('Viktor');
  received.health = 0;
  received.damage(10);

  const expected = {
    name: 'Viktor',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Correct method damage (100 points)', () => {
  const received = new Bowman('Viktor');
  received.damage(100);
  const expected = 25;
  expect(received.health).toEqual(expected);
});

test('Correct method damage (1000 points)', () => {
  const received = new Bowman('Viktor');
  received.damage(1000);
  const expected = 0;
  expect(received.health).toEqual(expected);
});
