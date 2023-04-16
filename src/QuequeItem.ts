class QueueItem {
  value: unknown;
  priority: number;
  constructor(value: unknown, priority: number = Math.ceil(Math.random() * 10000)) {
    this.value = value;
    this.priority = priority;
  }
}

export default QueueItem;
