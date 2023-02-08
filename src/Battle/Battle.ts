import Fighter from '../Fighter';

export default abstract class Battle {
  constructor(
    protected player: Fighter,
  ) {}

  fight(): number {
    if (this.player.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}