import { PathModel } from "./path.model";

export interface DijkstraModel<T> {
  findShortestPath(vertex1: T, vertex2: T): PathModel;
  findAllShortestPaths(vertex: T): Record<string, PathModel>;
}
