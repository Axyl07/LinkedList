import { LinkedList } from "./LinkedList";



const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("dinosaur");
list.prepend("dinosaur0");
list.append("panda")
console.log(list);
// console.log(list.size());
// console.log(list.Head())
console.log(list.toString());
