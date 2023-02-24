import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(...args) {
    super(args);
    this.points = [args[0], args[1], args[2]];
    if (this.points.length !== 3) {
      throw new Error();
    }
  }
  getType(): string {
    const sameLengthsArray = this.points.map((point, index) =>
      Math.round(this.points[index].distance(index === this.points.length - 1 ? this.points[0] : this.points?.[index + 1]) * 100) / 100
    );
    const result = Array.from(new Set(sameLengthsArray)).length;
    if (result === 1) {
      return "equilateral triangle";
    }
    if (result === 2) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }

  toString(): string {
    return `Triangle[${this.points.map((point, index) => `v${index + 1}=${point.toString()}`)}]`;
  }
}
