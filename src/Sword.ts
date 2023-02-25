import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  baseDamage: number;
  baseDurability: number;
  value: number;
  weight: number;
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("sword", baseDamage, baseDurability, value, weight);
  }

  polish() {
    if (this.damageModifier < (this.baseDamage / 100) * 25) {
      this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}
