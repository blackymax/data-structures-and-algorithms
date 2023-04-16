import PriorityQueue from "./src/PriorityQueue";
import QueueItem from "./src/QuequeItem";

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(new QueueItem(1, 2));

priorityQueue.enqueue(new QueueItem(1, 3));
priorityQueue.enqueue(new QueueItem(1, 4));
priorityQueue.enqueue(new QueueItem(1, 5));
priorityQueue.enqueue(new QueueItem(1));
priorityQueue.enqueue(new QueueItem(1));
priorityQueue.enqueue(new QueueItem(1));
priorityQueue.enqueue(new QueueItem(1));
priorityQueue.enqueue(new QueueItem(1));
priorityQueue.enqueue(new QueueItem(1));
console.log(Math.ceil(Math.random() * 10000));

console.log(priorityQueue);
