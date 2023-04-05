// Breadth First Search (BFS) algorithm traverses a graph in a breadthward motion and uses a queue
// to remember to get the next vertex to start a search, when a dead end occurs in any iteration
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const breadthFirstValuesIteration = (root) => {
    if (root === null) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
      let size= queue.length;
      result.push(queue[size-1].val);
      while(size>0){
      let current = queue.shift();
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
     size--;
    }
    }
    return result;
  };
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  
  console.log(breadthFirstValuesIteration(a));
  
  //    -> ['a', 'b', 'c', 'd', 'e', 'f']
  