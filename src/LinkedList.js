
 class LinkedList{
  // constructor(list) {
  //     this.list = list;
  // }
     head = new Node();
  append(value) {
      let temp = this.head;
      while (temp.nextNode != null) temp = temp.nextNode;
      const newNode = new Node(value, null);
      temp.nextNode = newNode;
  }
     prepend(value) {
         const newNode = new Node(value, this.head.nextNode);
         this.head.nextNode = newNode;
     }
}


 class Node{
  value = null;
  nextNode = null;
  constructor(value, nextNode) {
      this.value = value;
      this.nextNode = nextNode;
  }
}

export {LinkedList,Node}
// const n1 = new Node('a');
// const n2 = new Node('b', n1);
// console.log(n1);
// console.log(n2);