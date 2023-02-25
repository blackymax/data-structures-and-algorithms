export class Weapon {
  name: string;
  baseDamage: number;
  baseDurability: number;
  value: number;
  weight: number;
  static MODIFIER_CHANGE_RATE = 0.05;
  damageModifier = 0;
  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    this.name = name;
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.value = value;
    this.weight = weight;
  }
  getEffectiveDamage() {
    return this.baseDamage + this.damageModifier;
  }
  getEffectiveDurability(): number;
  getEffectiveDurability(durabilityModifier: number): number;
  getEffectiveDurability(durabilityModifier = 1) {
    return this.baseDurability / durabilityModifier;
  }
  use() {
    if (this.baseDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.baseDurability -= 0.05
    if (this.baseDurability <= 0) {
      return `You use the ${this.name}, dealing ${this.baseDamage + this.damageModifier} points of damage.\nThe ${
        this.name
      } breaks.`;
    }
    return `You use the ${this.name}, dealing ${this.baseDamage + this.damageModifier} points of damage.`;
  }
  toString() {
    return `${this.name} − Value: ${this.value.toPrecision(3)}, Weight: ${this.weight.toFixed(2)}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.baseDurability * 100).toFixed(2)}%`;
  }
}
