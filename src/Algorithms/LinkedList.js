class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
    console.log("New Node added");
  }

  getNodeByIndex(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  addNodeByIndex(value, index) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let previousNode = this.getNodeByIndex(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.size++;
  }

  deleteNodeByIndex(index) {
    let currentNode = this.head;
    if (this.size === 0) {
      this.head = currentNode.next;
    } else {
      let previousNode = this.getNodeByIndex(index - 1);
      previousNode.next = previousNode.next.next;
      this.size--;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
console.log(linkedList);
console.log(linkedList.getNodeByIndex(0));
linkedList.addNodeByIndex(3, 2);
console.log(linkedList);
linkedList.deleteNodeByIndex(1);
console.log(linkedList);