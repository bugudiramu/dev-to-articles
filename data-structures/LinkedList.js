class LNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    push(value) {
      const newLNode = new LNode(value);
      if (!this.head) {
        this.head = newLNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newLNode;
      }
    }
  
    pop() {
      let current = this.head;
      let prev = null;
  
      if (!current) {
        return null;
      }
  
      while (current.next) {
        prev = current;
        current = current.next;
      }
  
      if (!prev) {
        this.head = null;
      } else {
        prev.next = null;
      }
  
      return current.value;
    }
  
    toArray() {
      let current = this.head;
      const result = [];
  
      while (current) {
        result.push(current.value);
        current = current.next;
      }
  
      return result;
    }
  
    delete(value) {
      let current = this.head;
      let prev = null;
  
      while (current && current.value !== value) {
        prev = current;
        current = current.next;
      }
  
      if (current) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
  
        return current.value;
      }
  
      return null;
    }
  
    print() {
      let current = this.head;
  
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    find(value) {
      let current = this.head;
  
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
  
      return false;
    }
  
    reverse() {
      let current = this.head;
      let prev = null;
  
      while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    size() {
      let count = 0;
      let current = this.head;
  
      while (current) {
        count++;
        current = current.next;
      }
  
      return count;
    }
  }
  
  const linkedList = new LinkedList();
  
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  
  console.log("Original Linked List:");
  linkedList.print();
  
  const poppedValue = linkedList.pop();
  console.log(`Popped Value: ${poppedValue}`);
  
  console.log("\nLinked List After Pop:");
  linkedList.print();
  
  const arrayRepresentation = linkedList.toArray();
  console.log("\nArray Representation of Linked List:", arrayRepresentation);
  