// Depth First Search (DFS) algorithm traverses a graph in a depth-ward motion and uses a stack 
//to remember to get the next vertex to start a search when a deadend occurs in any iteration.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValuesIteration = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

const depthFirstValuesRecursion = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValuesRecursion(root.left);
  const rightValues = depthFirstValuesRecursion(root.right);

  return [root.val, ...leftValues, ...rightValues];
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

depthFirstValuesIteration(a);
depthFirstValuesRecursion(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
