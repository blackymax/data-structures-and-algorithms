import { Item } from "./Item";

export abstract class Weapon extends Item {
  public name: string;
  public baseDamage: number;
  public baseDurability: number;
  public value: number;
  public weight: number;
  public damageModifier = 0;
  public static MODIFIER_CHANGE_RATE = 0.05;
  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight)
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }
  public getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }
  public getEffectiveDurability(): number;
  public getEffectiveDurability(durabilityModifier: number): number;
  public getEffectiveDurability(durabilityModifier = 1): number {
    return this.baseDurability / durabilityModifier;
  }
  public use(): string {
    if (this.baseDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.baseDurability -= 0.05;
    if (this.baseDurability <= 0) {
      return `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.\nThe ${this.name} breaks.`;
    }
    return `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
  }
  public toString(): string {
    return `${this.name} − Value: ${this.value.toPrecision(3)}, Weight: ${this.weight.toFixed(
      2
    )}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.baseDurability * 100).toFixed(2)}%`;
  }
}
