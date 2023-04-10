import Edge from "./src/edge";
import Dijkstra from "./src/dijkstra";
import WeightGraph from "./src/weight-graph";

const vertices = [
  "1",
  "2",
  "3",
  "4",
  "5",
];

const edges = [
  new Edge(vertices[0], vertices[3], 3),
  new Edge(vertices[0], vertices[1], 5),
  new Edge(vertices[0], vertices[2], 4),
  new Edge(vertices[1], vertices[3], 6),
  new Edge(vertices[1], vertices[2], 5),
];
const graph = new WeightGraph();

vertices.forEach((verticle) => graph.addVertex(verticle));
edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));

const dijkstra = new Dijkstra(graph);

console.log(dijkstra.findShortestPath(vertices[3], vertices[2])); // { path: ['4', '1', '3'], distance: 7 }
console.log(dijkstra.findShortestPath(vertices[0], vertices[4])); // { path: [], distance: Infinity }
console.log(dijkstra.findShortestPath(vertices[2], vertices[3])); // { path: ['3', '1', '4'], distance: 7 }
console.log(dijkstra.findShortestPath(vertices[0], vertices[0]));

console.log(dijkstra.findAllShortestPaths(vertices[2]))

