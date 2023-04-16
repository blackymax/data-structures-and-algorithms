import QueueItem from "./QuequeItem";

class PriorityQueue {
  queue: QueueItem[] = [];

  enqueue(qItem: QueueItem): number {
    if (this.queue.length < 1) {
      this.queue.push(qItem);
    } else {
      for (let index in this.queue) {
        if (this.queue?.[index].priority < qItem.priority) {
          this.queue?.splice(+index, 0, qItem);
          break;
        }
      }
    }
    return this.queue.length
  }

  dequeue(): QueueItem | string {
    if (this.queue.length > 0) {
      const dequeuedItem = this.queue?.splice(this.queue.length - 1, 1);
      return dequeuedItem[0];
    } else {
      return "Queue is empty";
    }
  }
}

export default PriorityQueue;
