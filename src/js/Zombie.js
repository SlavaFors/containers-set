import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super( //name, type, health, level, attack, defence
      name,
      'Zombie',
      100,
      1,
      40,
      10,
    );
  }
}