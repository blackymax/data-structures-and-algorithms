import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight)
  }

  private polish(): void {
    if (this.baseDurability < 1) {
        this.baseDurability += Weapon.MODIFIER_CHANGE_RATE
    }
  }
}
