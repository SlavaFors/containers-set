import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super( //name, type, health, level, attack, defence
      name,
      'Daemon',
      100,
      1,
      10,
      40,
    );
  }
}