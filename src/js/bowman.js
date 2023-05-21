import Character from './character';

export default class Bowman extends Character {
  constructor(name) {
    super( // name, type, health, level, attack, defence
      name,
      'Bowman',
      100,
      1,
      25,
      25,
    );
  }
}
