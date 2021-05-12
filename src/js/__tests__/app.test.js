/* eslint-disable object-curly-newline */
/* eslint-disable no-new */
import Character, { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../app';

test('character = Bowman', () => {
  const character = new Character('Bowman', 'Bowman');
  expect(character).toEqual({ name: 'Bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 });
});
test('character = Swordsman', () => {
  const character = new Character('Swordsman', 'Swordsman');
  expect(character).toEqual({ name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 });
});
test('character = Magician', () => {
  const character = new Character('Magician', 'Magician');
  expect(character).toEqual({ name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 });
});
test('character = Undead', () => {
  const character = new Character('Undead', 'Undead');
  expect(character).toEqual({ name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 });
});
test('character = Zombie', () => {
  const character = new Character('Zombie', 'Zombie');
  expect(character).toEqual({ name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 });
});
test('character = Daemon', () => {
  const character = new Character('Daemon', 'Daemon');
  expect(character).toEqual({ name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 });
});

test('new Bowman', () => {
  const character = new Bowman('Bowman', 'Bowman');
  expect(character).toEqual({ name: 'Bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 });
});
test('new Swordsman', () => {
  const character = new Swordsman('Swordsman', 'Swordsman');
  expect(character).toEqual({ name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 });
});
test('new Magician', () => {
  const character = new Magician('Magician', 'Magician');
  expect(character).toEqual({ name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 });
});
test('new Undead', () => {
  const character = new Undead('Undead', 'Undead');
  expect(character).toEqual({ name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 });
});
test('new Zombie', () => {
  const character = new Zombie('Zombie', 'Zombie');
  expect(character).toEqual({ name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 });
});
test('new Daemon', () => {
  const character = new Daemon('Daemon', 'Daemon');
  expect(character).toEqual({ name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 });
});

test('character levelUp', () => {
  const character = new Character('Bowman', 'Bowman');
  character.levelUp();
  expect(character).toEqual({ name: 'Bowman', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30 });
});

test('child element levelUp', () => {
  const character = new Bowman('Bowman', 'Bowman');
  character.levelUp();
  expect(character).toEqual({ name: 'Bowman', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30 });
});

test('character dammage', () => {
  const character = new Character('Bowman', 'Bowman');
  character.damage(5);
  expect(character).toEqual({ name: 'Bowman', type: 'Bowman', health: 96.25, level: 1, attack: 25, defence: 25 });
});

test('character dammage', () => {
  function CharacterExpectError() {
    const character = new Character('Bowman', 'Bowman');
    character.health = -5;
    character.damage(5);
  }
  expect(CharacterExpectError).toThrow(new Error('Значение здоровья задано неверно'));
});

test('child element damage', () => {
  const character = new Bowman('Bowman', 'Bowman');
  character.damage(5);
  expect(character).toEqual({ name: 'Bowman', type: 'Bowman', health: 96.25, level: 1, attack: 25, defence: 25 });
});

test('name error ', () => {
  function CharacterExpectError() {
    return new Character('B', 'Bowman');
  }
  expect(CharacterExpectError).toThrow(new Error('Некорректное имя'));
});

test('type error ', () => {
  function CharacterExpectError() {
    return new Character('Bowman', 'Smth');
  }
  expect(CharacterExpectError).toThrow(new Error('Тип задан неверно'));
});

test('levelUp error ', () => {
  function CharacterExpectError() {
    const character = new Character('Bowman', 'Bowman');
    character.health = 0;
    character.levelUp();
  }
  expect(CharacterExpectError).toThrow(new Error('Персонаж мертв'));
});
