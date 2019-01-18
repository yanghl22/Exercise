export class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callBack) {
    return callBack ? callBack(this.value) : `${this.value}`;
  }

  equalTo = fn => {
    return fn || this.defCompare;
  };

  defCompare = val => {
    return this.value === val;
  };
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append = node => {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    node.next = null;
    this.tail = node;
    return this;
  };

  prepend = node => {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      return this;
    }
  };

  removeHead = () => {
    if (this.isEmpty()) {
      throw "The Linked List is empty!";
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return this;
  };

  find = ({ val, callBack = undefined }) => {
    let curNode = this.head;
    while (curNode) {
      if (callBack && callBack(curNode.value) === val) {
        return curNode;
      } else {
        if (curNode.equalTo(val)) {
          return curNode;
        }
      }
      curNode = curNode.next;
    }
    return null;
  };

  removeTail = () => {
    if (this.isEmpty()) {
      throw "The Linked List is empty!";
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let curNode = this.head;
      while (!curNode.next.next) {
        curNode = curNode.next;
      }
      curNode.next = null;
      this.tail = curNode;
    }
    return this;
  };

  removeValue = value => {
    if (this.isEmpty()) {
      return;
    }
    if (this.head === this.tail && this.head.value.equalTo(value)) {
      this.head = null;
      this.tail = null;
    } else {
      let curNode = this.head;
      while (!curNode.next.next) {
        if (curNode.next.value.isEqual(value)) {
          curNode.next = curNode.next.next;
        }
        curNode = curNode.next;
      }
      if (curNode.next.value.equalTo(value)) {
        curNode.next = null;
        this.tail = curNode;
      }
    }
    return this;
  };

  isEmpty = () => {
    return this.head === null;
  };
}
