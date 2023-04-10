export interface WeightedGraphModel<T> {
  addVertex(vertex: T): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}
