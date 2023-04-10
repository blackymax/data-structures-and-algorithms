import Edge from "./edge";
import { WeightedGraphModel } from "./types/weight-graph.model";
import Vertex from "./vertex";

class WeightGraph<T extends string> implements WeightedGraphModel<T> {
  vertices: T[] = [];
  edges: Edge<T>[] = [];
  addEdge(vertex1: T, vertex2: T, weight: number): void {
    this.edges.push(new Edge<T>(vertex1, vertex2, weight));
  }

  addVertex(vertex: T): void {
    this.vertices.push(vertex);
  }
}

export default WeightGraph;
