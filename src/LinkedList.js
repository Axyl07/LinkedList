class LinkedList {
  head = null;
  append(value) {
    if (this.head == null) this.head = new Node(value, null);
    else {
      let temp = this.head;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value, null);
    }
  }
  prepend(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let newNode = new Node(value, this.head);
      this.head = newNode;
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    } else {
      let length = 1;
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        length++;
      }
      return length;
    }
  }
  Head() {
    return this.head;
  }
  tail() {
    let temp = this.head;
    while (temp.nextNode != null) temp = temp.nextNode;
    return temp;
  }
  at(index) {
    let i = 0;
    let temp = this.head;
    while (temp.nextNode != null) {
      i++;
      if (i === index) {
        return temp;
      }
      temp = temp.nextNode;
    }
    return temp;
  }
  pop() {
    let temp = this.head;
    while (temp.nextNode.nextNode != null) temp = temp.nextNode;
    temp.nextNode = null;
  }

  contains(value) {
    let temp = this.head;
    while (temp.nextNode != null) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.nextNode;
    }
    if (temp.value === value) {
      return true;
    } else return false;
  }
  find(value) {
    let i = 0;
    let temp = this.head;
    while (temp.nextNode != null) {
      i++;
      if (temp.value === value) {
        return i;
      }
      temp = temp.nextNode;
    }
    return null;
  }
  toString() {
    let temp = this.head;
    let string = "";
    while (temp.nextNode != null) {
      string += ` ( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    string += ` ( ${temp.value} ) -> null `;
    return string;
  }
  insertAt(value, index) {
    let i = 0;
    let temp = this.head;
    while (temp.nextNode != null) {
      i++;
      if (i === index) {
        const newNode = new Node(value, temp.nextNode);
        temp.nextNode = newNode;
      }
      temp = temp.nextNode;
    }
    if (i === index) {
      const newNode = new Node(value, temp.nextNode);
      temp.nextNode = newNode;
    }
  }
  removeAt(index) {
    let i = 0;
    let prevNode = this.head;
    let currentNode = this.head.nextNode;
    while (currentNode.nextNode != null) {
      i++;
      if (i === index) {
        prevNode.nextNode = currentNode.nextNode;
      }
      prevNode = prevNode.nextNode;
      currentNode = currentNode.nextNode;
    }
  }
}

class Node {
  value = null;
  nextNode = null;
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList, Node };
