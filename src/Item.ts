import { Comparable } from "./Comparable";
import { ItemComparator } from "./ItemComparator";

export class Item implements Comparable<Item> {
  readonly name: string;
  readonly id: number;
  static idCounter = 0;
  value: number;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    Item.idCounter += 1;
    this.id = Item.idCounter;
  }

  static resetIdCounter() {
    Item.idCounter = 0;
  }

  getId() {
    return this.id;
  }

  compareTo(otherItem: Item) {
    if (this.value > otherItem.value) {
      return 1;
    } else if (this.name === otherItem.name && this.value === otherItem.value && this.weight === otherItem.weight) {
      return 0;
    } else {
      return -1;
    }
  }

  toString() {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }
}
