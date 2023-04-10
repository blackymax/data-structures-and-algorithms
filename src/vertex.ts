import { VertexModel } from "./types/vertex.model";

class Vertex<T> {
  value: T;
  key: string;

  constructor(name: string, value?: T) {
    this.key = name;
    this.value = value;
  }
  toString() {
    return this.key;
  }
}

export default Vertex;
