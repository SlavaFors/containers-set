import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super( // name, type, health, level, attack, defence
      name,
      'Swordsman',
      100,
      1,
      40,
      10,
    );
  }
}
