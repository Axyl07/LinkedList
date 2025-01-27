import { LinkedList } from "./LinkedList";



const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("dinosaur");
console.log(list);
console.log(list.size());
console.log(list.toString());
