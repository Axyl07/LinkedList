
 class LinkedList{
     head = null;
     append(value) {
         if (this.head == null) this.head = new Node(value, null);  
         else {
             let temp = this.head;
             while (temp.nextNode != null) temp = temp.nextNode;
             temp.nextNode = new Node(value,null);
        }       
         }
     prepend(value) {
         if (this.head==null) {
             this.head = new Node(value, null);  
         } else {
             let newNode = new Node(value, this.head);
             this.head = newNode;
         }
     }
    //  prepend(value) {
    //      const newNode = new Node(value, this.head.nextNode);
    //      this.head.nextNode = newNode;
    //  }
    //  size() {
    //      let length = 0;
    //      let temp = this.head;
    //      while (temp.nextNode != null) {
    //          length++;
    //          temp = temp.nextNode;
    //      }
    //      return length;
    //  }
    //  Head() {
    //      return this.head.nextNode;
    //  }
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