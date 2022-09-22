import Team from '../team';
import Bowman from '../bowman';
import Daemon from '../daemon';

test('Checking for adding a player', () => {
  const team = new Team();
  team.add(new Bowman('Alex'));
  const received = [...team.members][0];
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'Bowman',
  };
  expect(received).toEqual(expected);
});

test('Checking for adding an existing player', () => {
  const team = new Team();
  const member = new Bowman('Alex');
  team.add(member);
  const received = () => team.add(member);
  const expected = 'Такой персонаж был добавлен ранее';
  expect(received).toThrow(expected);
});

test('Adding multiple players', () => {
  const team = new Team();
  const member1 = new Bowman('Alex');
  const member2 = new Daemon('Igor');
  const member3 = new Daemon('Viktor');
  team.addAll(member1, member2, member3);
  const received = team.members;
  const expected = new Set([member1, member2, member3]);
  expect(received).toEqual(expected);
});

test('Adding multiple identical players', () => {
  const team = new Team();
  const member1 = new Bowman('Alex');
  const member2 = new Daemon('Igor');
  const member3 = new Daemon('Viktor');
  team.addAll(member1, member2, member3, member2);
  const received = team.members;
  const expected = new Set([member1, member2, member3]);
  expect(received).toEqual(expected);
});

test('Returning an array of players', () => {
  const team = new Team();
  const member1 = new Bowman('Alex');
  const member2 = new Daemon('Viktor');
  team.addAll(member1, member2);
  const received = team.toArray();
  const expected = [member1, member2];
  expect(received).toEqual(expected);
});
