import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  readonly numberOfSlices: number;
  numberOfEatenSlices = 0;
  constructor(value: number, weight: number, numberOfSlices = 0, isSpoiled = false) {
    super("pizza", value, weight, isSpoiled);
    this.numberOfSlices = numberOfSlices;
  }
  public getNumberOfEatenSlices(): number {
    return this.numberOfEatenSlices;
  }
  public use(): string {
    if (this.numberOfSlices - this.numberOfEatenSlices) {
      this.numberOfEatenSlices += 1;
      return `You consumed a slice of the ${this.name}.`;
    } else {
      return `There's nothing left of the ${this.name} to consume.`;
    }
  }
}
