export class Point {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // parse Point from view as "(1,2)""
  private parsePointFromString(point: string) {
    return point
      .replace(/\(|\)/gi, "")
      .split(",")
      .map((el) => Number(el));
  }

  distance(): number;
  distance(x: string): number;
  distance(x: Point): number;
  distance(x?: number | string | Point, y?: number): number {
    if ((x && typeof x === "string") || (x && x instanceof Point)) {
      const [inputX, inputY] = this.parsePointFromString(x instanceof Point ? x.toString() : x);
      const valueX = this.multiplyFloatDifference(inputX, this.x);
      const valueY = this.multiplyFloatDifference(inputY, this.y);
      return Math.sqrt(this.sumFloat(valueX, valueY));
    }
    if (
      this.x !== undefined &&
      x !== undefined &&
      typeof x === "number" &&
      this.y !== undefined &&
      y !== undefined &&
      typeof y === "number"
    ) {
      const valueX = this.multiplyFloatDifference(Number(x), this.x);
      const valueY = this.multiplyFloatDifference(Number(y), this.y);
      return Math.sqrt(this.sumFloat(valueX, valueY));
    }
    return Math.sqrt(this.sumFloat(parseFloat(String(this.x ** 2)), parseFloat(String(this.y ** 2))));
  }

  multiplyFloatDifference(value1: number, value2: number) {
    return parseFloat(String(parseFloat(String(value1 - value2)) ** 2));
  }

  sumFloat(value1: number, value2: number) {
    return parseFloat(String(value1 + value2));
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
