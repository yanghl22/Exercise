import { LinkedList, LinkedListNode } from "./LinkedList";

test("Create a new linked List", () => {
  let list = new LinkedList();
  expect(list.isEmpty()).toBe(true);
});

test("Append a node to an empty linked list", () => {
  let list = new LinkedList();
  let node = new LinkedListNode(1);
  list.append(node);
  expect(list.head).toBe(node);
  expect(list.tail).toBe(node);
});


