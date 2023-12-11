class PriorityQueue {
    constructor() {
      this.items = [];
      this.size = 0;
    }
  
    enqueue(item) {
      if (this.isEmpty()) {
        this.items.push(item);
      } else {
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
          if (item[0] < this.items[i][0]) {
            this.items.splice(i, 0, item);
            added = true;
            break;
          }
        }
        if (!added) {
          this.items.push(item);
        }
      }
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
      return this.isEmpty() ? undefined : this.items[0][1];
    }
  }
  
  const priorityQueue = new PriorityQueue(); // Generic type in this case it is string type
  
  priorityQueue.enqueue([1, "Ramu"]);
  priorityQueue.enqueue([2, "Kumar"]);
  console.log("Front of the priorityQueue:", priorityQueue.peek());
  console.log("Queue size:", priorityQueue.getSize());
  
  priorityQueue.dequeue();
  console.log("Front of the priorityQueue after dequeue:", priorityQueue.peek());
  console.log("Is the priorityQueue empty?", priorityQueue.isEmpty());
  