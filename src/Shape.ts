import { Point } from "./Point";

export abstract class Shape {
  color: string;
  filled: boolean;
  points: Point[];
  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length !== 3) {
      throw new Error();
    }
    if (points && color !== undefined && filled !== undefined) {
      this.points = points;
      this.color = color;
      this.filled = filled;
    } else {
      this.points = points;
      this.color = "green";
      this.filled = true;
    }
  }
  abstract getType(): string;

  getPerimeter(): number {
    const [distance1, distance2] = [this.points[0].distance(this.points[1].toString()), this.points[1].distance(this.points[2].toString())];
    return distance1 * distance2;
  }

  toString() {
    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${this.points.join(", ")}.`;
  }
}
