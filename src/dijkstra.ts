import Edge from "./edge";
import { DijkstraModel } from "./types/dijkstra.model";
import { EdgeModel } from "./types/edge.model";
import { PathModel } from "./types/path.model";
import WeightGraph from "./weight-graph";

class Dijkstra<T extends string> implements DijkstraModel<T> {
  graph: WeightGraph<T>;
  constructor(graph: WeightGraph<T>) {
    this.graph = graph;
  }
  findShortestPath(vertex1: T, vertex2: T): PathModel {
    if (vertex1 === vertex2) {
      return null;
    }
    const visitedVertices = [vertex1];

    const costs: Record<string, PathModel> = {};

    const path: PathModel = {
      path: [],
      distance: Infinity,
    };

    let neighbours = {};

    for (let vertex of this.graph.vertices) {
      if (vertex !== vertex1) {
        let foundedEdge = this.findEdgeByVertices(vertex1, vertex);
        const value = foundedEdge?.weight || Infinity;
        costs[vertex] = { path: [vertex1], distance: value };
      }
    }
    let closestVertix = this.findLowestDistance(costs, visitedVertices);
    while (closestVertix !== vertex2) {
      if (!closestVertix) {
        return path;
      }
      const cost = costs[closestVertix]?.distance;
      neighbours = this.getEdgesByVertix(closestVertix, visitedVertices);
      Object.keys(neighbours).forEach((neighbour) => {
        let newCost = cost + (neighbours[neighbour] || Infinity);
        if (newCost < costs[neighbour].distance) {
          costs[neighbour].distance = newCost;
          costs[neighbour].path.push(closestVertix);
        }
      });
      visitedVertices.push(closestVertix);
      closestVertix = this.findLowestDistance(costs, visitedVertices);
    }
    path.path = [...costs[closestVertix].path, closestVertix];
    path.distance = costs[closestVertix].distance;
    return path;
  }
  findAllShortestPaths(vertex: T): Record<string, PathModel> {
    return this.graph.vertices.reduce((acc, curVertex) => {
      acc[curVertex as string] = this.findShortestPath(vertex, curVertex);
      return acc;
    }, {});
  }

  findEdgeByVertices(vertix1, vertix2) {
    return this.graph.edges.find(
      (edge) =>
        (edge.from === vertix1 && edge.to === vertix2) ||
        (edge.to === vertix1 && edge.from === vertix2)
    );
  }

  getEdgesByVertix(vertix, visited) {
    return this.graph.edges
      .filter(
        (edge) =>
          (edge.from === vertix && !visited.includes(edge.to)) ||
          (edge.to === vertix && !visited.includes(edge.from))
      )
      .reduce((acc, edge) => {
        const key = vertix === edge.from ? edge.to : edge.from;
        acc[key as string] = edge.weight;
        return acc;
      }, {});
  }

  findLowestDistance(costs: Record<string, PathModel>, visitedVertices: T[]) {
    let lowestCost = Infinity;
    let closestVertix;
    Object.keys(costs).forEach((vertix) => {
      if (
        costs[vertix].distance < lowestCost &&
        !visitedVertices.includes(vertix as T)
      ) {
        lowestCost = costs[vertix].distance;
        closestVertix = vertix;
      }
    });
    return closestVertix;
  }
}

export default Dijkstra;
