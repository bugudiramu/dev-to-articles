class TreeNode {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
  
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    find(value) {
      let current = this.root;
      if (!current) return -1;
  
      while (current) {
        if (value === current.value) return current.value;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return -1;
    }
  
    getMin() {
      let current = this.root;
  
      while (current?.left) {
        current = current.left;
      }
      return current?.value;
    }
  
    getMax() {
      let current = this.root;
  
      while (current?.right) {
        current = current.right;
      }
      return current?.value;
    }
  
    remove(value) {
      let current = this.root;
      this.root = this.removeNode(current, value);
    }
  
    removeNode(node, value) {
      if (!node) return null;
  
      if (value < node.value) {
        node.left = this.removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.removeNode(node.right, value);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
  
        node.value = this.getMinValue(node.right);
  
        node.right = this.removeNode(node.right, node.value);
      }
      return node;
    }
  
    getMinValue(node) {
      let current = node;
      while (current.left) {
        current = current.left;
      }
      return current.value;
    }
  
    breadthFirstSearch() {
      const queue = [];
      const visited = [];
      let current = this.root;
  
      if (!current) return visited;
  
      queue.push(current);
  
      while (queue.length) {
        current = queue.shift();
        visited.push(current.value);
  
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
      return visited;
    }
  
    depthFirstSearchPreOrder() {
      const visited = [];
      this.traversePreOrder(this.root, visited);
      return visited;
    }
  
    traversePreOrder(node, visited) {
      if (node) {
        visited.push(node.value);
        this.traversePreOrder(node.left, visited);
        this.traversePreOrder(node.right, visited);
      }
    }
  
    depthFirstSearchInOrder() {
      const visited = [];
      this.traverseInOrder(this.root, visited);
      return visited;
    }
  
    traverseInOrder(node, visited) {
      if (node) {
        this.traverseInOrder(node.left, visited);
        visited.push(node.value);
        this.traverseInOrder(node.right, visited);
      }
    }
  
    depthFirstSearchPostOrder() {
      const visited = [];
      this.traversePostOrder(this.root, visited);
      return visited;
    }
  
    traversePostOrder(node, visited) {
      if (node) {
        this.traversePostOrder(node.left, visited);
        this.traversePostOrder(node.right, visited);
        visited.push(node.value);
      }
    }
  }
  
  const tree = new BinarySearchTree(); // Generic type in this case it is number type
  tree.insert(5);
  tree.insert(3);
  tree.insert(1);
  tree.insert(7);
  tree.insert(2);
  
  tree.breadthFirstSearch(); // [ 5, 3, 7, 1, 2 ]
  tree.depthFirstSearchPreOrder(); // [ 5, 3, 1, 2, 7 ]
  tree.depthFirstSearchInOrder(); // [ 1, 2, 3, 5, 7 ]
  tree.depthFirstSearchPostOrder(); // [ 2, 1, 3, 7, 5 ]
  
  tree.getMin(); // 1
  tree.getMax(); // 7
  
  // Tree representation
  /*
                  5
              3       7
          2
      1
      */