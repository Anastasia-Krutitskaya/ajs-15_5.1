/* eslint-disable max-classes-per-file */
// TODO: write your code here

const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя');
    } else {
      this.name = name;
    }
    if (arrType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип задан неверно');
    }
    this.health = 100;
    this.level = 1;
    if (this.type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    }
    if (this.type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }
    if (this.type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    }
    if (this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }
    if (this.type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
    if (this.type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж мертв');
    } else {
      this.level += 1;
      this.attack = (this.attack * 0.2) + this.attack;
      this.defence = (this.defence * 0.2) + this.defence;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= (points * (1 - this.defence / 100));
    } else {
      throw new Error('Значение здоровья задано неверно');
    }
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
