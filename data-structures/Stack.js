class Stack {
  constructor() {
    this.size = 0;
    this.items = [];
  }

  push(value) {
    this.items.unshift(value);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow: cannot pop from an empty stack");
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
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  clear() {
    if (this.isEmpty()) {
      throw new Error("Stack empty: Can not clear empty stack");
    }
    this.items = [];
    this.size = 0;
  }

  contains(value) {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.includes(value);
  }

  toString() {
    return JSON.stringify(this.items);
  }

  clone() {
    return [...this.items]; // shallow cloning
  }
}

const stack = new Stack(); // Generic type in this case it i type

stack.push(1);
stack.push(2);
console.log("Stack Size:", stack.getSize());
console.log("Stack Peek:", stack.peek());
console.log("Stack Contains 2:", stack.contains(2));
console.log("Stack Contents:", stack.toString());

stack.pop();
console.log("Stack Size after Pop:", stack.getSize());
console.log("Is Stack Empty:", stack.isEmpty());

stack.clear();
console.log("Stack Size after Clear:", stack.getSize());
