class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items?.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push({ name: "Amit" });
stack.push({ name: "Raj" });
stack.push({ name: "Rohit" });
stack.push({ name: "Rahul" });
console.log(stack.peek());

const removed = stack.pop();
console.log(removed);
console.log(stack.items);
