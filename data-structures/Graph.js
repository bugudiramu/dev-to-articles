class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, new Set());
      }
      return this;
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1).addVertex(vertex2);
  
      this.adjacencyList.get(vertex1).add(vertex2);
      this.adjacencyList.get(vertex2).add(vertex1);
      return this;
    }
  
    removeVertex(vertex) {
      if (this.adjacencyList.has(vertex)) {
        for (const adjacentVertex of this.adjacencyList.get(vertex)) {
          this.removeEdge(vertex, adjacentVertex);
        }
        this.adjacencyList.delete(vertex);
      }
      return this;
    }
  
    removeEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex1).delete(vertex2);
        this.adjacencyList.get(vertex2).delete(vertex1);
      }
      return this;
    }
  
    getVertices() {
      return [...this.adjacencyList.keys()];
    }
  
    getEdges() {
      const edges = [];
      for (const [vertex, neighbors] of this.adjacencyList) {
        for (const neighbor of neighbors) {
          edges.push([vertex, neighbor]);
        }
      }
      return edges;
    }
  
    hasVertex(vertex) {
      return this.adjacencyList.has(vertex);
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList.has(vertex1) &&
        this.adjacencyList.get(vertex1).has(vertex2)
      );
    }
  
    getNeighbors(vertex) {
      return [...this.adjacencyList.get(vertex)];
    }
  
    isEmpty() {
      return this.adjacencyList.size === 0;
    }
  
    clear() {
      this.adjacencyList.clear();
      return this;
    }
  
    size() {
      return this.adjacencyList.size;
    }
  
    depthFirstSearch(startVertex, callback) {
      const visited = new Set();
  
      function traverse(vertex) {
        visited.add(vertex);
        callback(vertex);
  
        for (const neighbor of this.adjacencyList.get(vertex)) {
          if (visited.has(neighbor)) {
            traverse.call(this, neighbor);
          }
        }
      }
  
      traverse.call(this, startVertex);
      return this;
    }
  
    breadthFirstSearch(startVertex, callback) {
      const visited = new Set();
      const queue = [startVertex];
      visited.add(startVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        callback(currentVertex);
  
        for (const neighbor of this.adjacencyList.get(currentVertex)) {
          if (visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
  
      return this;
    }
  }
  
  const graph = new Graph(); // Generic type in this case it is number type
  
  graph
    .addVertex("A")
    .addVertex("B")
    .addVertex("C")
    .addEdge("A", "B")
    .addEdge("B", "C")
    .depthFirstSearch("A", (vertex) => console.log(`Visited ${vertex} in DFS`))
    .breadthFirstSearch("A", (vertex) => console.log(`Visited ${vertex} in BFS`));
  