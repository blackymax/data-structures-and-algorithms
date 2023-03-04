import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[];
  constructor() {
    this.items = [];
  }

  private addItem(item: Item): void {
    this.items.push(item);
  }
  private sort(comparator?: ItemComparator): void {
    const compareFunc = comparator
      ? comparator.compare
      : (currentItem: Item, nextItem: Item) => currentItem.value - nextItem.value;
    this.items = this.items.sort(compareFunc);
  }
  public toString(): string {
    return this.items.map((item) => item.toString()).join(", ");
  }
}
