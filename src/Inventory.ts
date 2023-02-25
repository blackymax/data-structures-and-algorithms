import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  items: Item[];
  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }
  sort(comparator?: ItemComparator) {
    const compareFunc = comparator
      ? comparator.compare
      : (currentItem: Item, nextItem: Item) => currentItem.value - nextItem.value;
    this.items = this.items.sort(compareFunc);
  }
  toString() {
    return this.items.map((item) => item.toString()).join(", ");
  }
}
