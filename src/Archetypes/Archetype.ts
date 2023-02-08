import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  private static _instances = 0;

  constructor(
    private _name: string,
  ) {
    Archetype._instances += 1;
  }

  get name(): string {
    return this._name;
  }
  
  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    return Archetype._instances;
  }

  abstract get energyType(): EnergyType;
}