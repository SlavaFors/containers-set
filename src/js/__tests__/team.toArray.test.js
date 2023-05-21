import Team from '../team';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Undead from '../undead';

test('Testing Team class - method toArray()...', () => {
  const newTeam = new Team();
  const character1 = new Daemon('Roji');
  const character2 = new Bowman('Terox');
  const character3 = new Undead('Mike');
  const arrayCharacters = [character1, character2, character3];

  newTeam.addAll(...arrayCharacters);
  newTeam.toArray();
  expect(arrayCharacters).toEqual(newTeam.members);
});
