class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.prev = currentNode;
    this.size++;
    console.log("new node added");
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
    if(this.head === null){
      this.head = newNode;
      return;
    }
    let prevNode = this.getNodeByIndex(index - 1);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    this.size++;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.add(1);
linkedList.add(2);
console.log(linkedList);
linkedList.addNodeByIndex(3, 2);
console.log(linkedList);


