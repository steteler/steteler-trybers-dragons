import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: SimpleFighter[],
  ) {
    super(_player);
  }

  fight(): number {
    while (
      this._player.lifePoints > 0
      && this._monsters.some((monster) => monster.lifePoints > 0)
    ) {
      this._monsters.map((monster) => this._player.attack(monster));
      this._monsters.map((monster) => monster.attack(this._player));
    }

    return super.fight();
  }
}