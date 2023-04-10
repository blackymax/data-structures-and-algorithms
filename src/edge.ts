import { EdgeModel } from "./types/edge.model";
import Vertex from "./vertex";

class Edge<T> implements EdgeModel<T> {
  from: T;
  to: T;
  weight: number;
  constructor(from: T, to: T, weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

export default Edge;
