class Queue {
    constructor() {
      this.items = [];
      this.size = 0;
    }
  
    enqueue(value) {
      this.items.push(value);
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Dequeue operation on an empty queue");
      }
      this.items.shift();
      this.size--;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    peek() {
      return this.isEmpty() ? undefined : this.items[0];
    }
  }
  
  const queue = new Queue(); // Generic type in this case it is number type
  
  queue.enqueue(1);
  queue.enqueue(2);
  console.log("Front of the queue:", queue.peek());
  console.log("Queue size:", queue.getSize());
  
  queue.dequeue();
  console.log("Front of the queue after dequeue:", queue.peek());
  console.log("Is the queue empty?", queue.isEmpty());
  