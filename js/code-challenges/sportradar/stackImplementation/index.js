class Node {
  constructor(number) {
    this.data = number;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(number) {
    const newNode = new Node(number);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top !== null) {
      const topItem = this.top.data;
      this.top = this.top.next;
      return topItem;
    }
    return null;
  }

  list() {
    let current = this.top;
    const list = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list.reverse();
  }
}

module.exports = Stack;
