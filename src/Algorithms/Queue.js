class Queue {
  items = {};
  tail = 0;
  head = 0;

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    if (!item) return null;
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.tail - this.head;
  }

  peek() {
    return this.items[this.head];
  }
}

const queue = new Queue();
queue.enqueue({ name: "Amit" });
queue.enqueue({ name: "Ram" });
queue.enqueue({ name: "Shyam" });

const deleted = queue.dequeue();
console.log(deleted);

console.log(queue);
