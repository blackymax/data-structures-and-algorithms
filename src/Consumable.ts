export class Consumable {
  name: string;
  value: number;
  weight: number;
  isConsumed: boolean;
  isSpoiled: boolean;
  constructor(name: string, value: number, weight: number, isSpoiled: boolean) {
    this.name = name;
    this.value = value;
    this.weight = weight
    this.isSpoiled = isSpoiled;
  }
  use() {
    if (this.isConsumed) {
        return `There's nothing left of the ${this.name} to consume.`
    }
    if (this.isSpoiled) {
        return `You consumed the ${this.name}.\nYou feel sick.`
    }
    return `You consumed the ${this.name}.`
  }
}
