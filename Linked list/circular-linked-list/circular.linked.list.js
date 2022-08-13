class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyCircularLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (value) {
      this.initialize(value);
    }
  }

  initialize(value) {
    const newNode = new Node(value);
    newNode.next = newNode;

    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  insertFirst(value) {
    if (this.length === 0) return this.initialize(value);

    const newFirstNode = new Node(value);
    newFirstNode.next = this.head.next;
    this.head = newFirstNode;
    this.tail.next = newFirstNode;
    this.tail = newFirstNode;
    this.length++;
  }

  insertLast(value) {
    if (this.length === 0) return this.initialize(value);

    const newLastNode = new Node(value);
    newLastNode.next = this.head;
    this.tail.next = newLastNode;
    this.tail = newLastNode;

    this.length++;
  }

  indexOf(index) {
    if (index < 0) return undefined;

    let counter = 0;

    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  toArray() {
    const arr = [];

    let currentNode = this.head;

    do {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
    return arr;
  }

  insertAtIndex(value, index) {
    if (index === 0) return this.insertFirst(value);
    if (index >= this.length) return this.insertLast(value);

    const newNode = new Node(value);
    const previuosIndex = this.indexOf(index - 1);

    const targetIndex = previuosIndex.next;

    previuosIndex.next = newNode;
    newNode.next = targetIndex;

    this.length++;
    return this;
  }

  deleteHead() {
    if (this.length === 0) return 'List is empty.';

    if (this.length === 1) {
      const headValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return headValue;
    }

    const headValue = this.head.value;
    const newHead = this.head.next;
    this.head = newHead;
    this.tail.next = this.head;
    this.length--;
    return headValue;
  }

  deleteTail() {
    if (this.length === 0) return 'List is empty.';

    if (this.length === 1) {
      const headValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return headValue;
    }

    const tailValue = this.tail.value;

    const previuosLastIndex = this.indexOf(this.length - 2);
    previuosLastIndex.next = this.head;
    this.tail.next = previuosLastIndex;
    this.length--;
    return tailValue;
  }

  deleteAtIndex(index) {
    if (this.length === 2 && index === 0) return this.deleteHead();
    if (this.length === 2 && index > 0) return this.deleteTail();

    const previousIndexOfdeleted = this.indexOf(index - 1);
    const targetDeletedValue = previousIndexOfdeleted.next;
    previousIndexOfdeleted.next = targetDeletedValue.next;

    this.length--;

    return targetDeletedValue.value;
  }
}

const list = new SinglyCircularLinkedList();
list.insertFirst(1); // 1
