
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
 
     size() {
     if (this.head === null) {
         return 0;
     } else {
         let length = 1
         let temp = this.head;
         while (temp.nextNode != null) {
             length++;
             temp = temp.nextNode;
         }
         return length;
     }
     }
     Head() {
         return this.head;
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