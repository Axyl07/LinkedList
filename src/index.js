import { LinkedList } from "./LinkedList";
console.log(
  "Note:Use append and Prepend to add elements at start/end of list instead of insertAt/removeAt",
);

const list = new LinkedList();
list.prepend("dinosaur");
list.prepend("trex");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("pant", 4);
list.removeAt(3);

list.insertAt("zebra", 3);
list.insertAt("hero", 5);
list.removeAt(5);
list.pop();
list.pop();
console.log(list);
console.log(list.size());
console.log(list.Head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.contains("dinosaur0"));
console.log(list.find("cat"));
console.log(list.toString());
