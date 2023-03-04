import { Comparable } from "./Comparable";
import { ItemComparator } from "./ItemComparator";

export abstract class Item implements Comparable<Item> {
  readonly name: string;
  readonly id: number;
  private static idCounter = 0;
  public value: number;
  public weight: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    Item.idCounter += 1;
    this.id = Item.idCounter;
  }

  public static resetIdCounter(): void {
    Item.idCounter = 0;
  }

  public getId(): number {
    return this.id;
  }

  public compareTo(otherItem: Item): number {
    if (this.value > otherItem.value) {
      return 1;
    } else if (this.name === otherItem.name && this.value === otherItem.value && this.weight === otherItem.weight) {
      return 0;
    } else {
      return -1;
    }
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }
}
