// We create a class for each node within the list
class Node {
  // Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }

    const poppedNode = this.tail;
    this.tail = poppedNode.prev;
    this.tail.next = null;

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;

    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;

    if (index <= this.length / 2) {
      current = this.head;

      for (count = 1; count <= index; count++) {
        current = current.next;
      }
    }

    else {
      current = this.tail;

      for (count = this.length - 2; index <= count; count--) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, val) {
    var foundNode = this.get(index)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false

    if (index === 0) return !!this.unshift(val)

    if (index === this.length) return !!this.push(val)

    var newNode = new Node(val);


    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    newNode.prev = beforeNode;
    newNode.next = afterNode

    beforeNode.next = newNode;
    afterNode.prev = newNode;

    this.length++;

    return true;

  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const foundNode = this.get(index);

    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    foundNode.prev = null;
    foundNode.next = null;

    return foundNode;

  }
}

function printList(list) {
  let current = list.head;
  while (current) { // while not null
    console.log(current.val);
    current = current.next;
  }
}

function createList(values) {
  let list = new DoublyLinkedList();
  values.forEach(val => {
    list.push(val);
  });
  return list;
}

function doubleMethods() {

  // 'China', 'Japan', 'Africa', 'India', 'Pakistan', 'America', 'Canada', 'Mexico'

  let list = createList(['China', 'Japan', 'Africa', 'India', 'Pakistan'])
  //printList(list);


  // list.push('India');

  // console.log(list.pop());
  console.log(list.get(3));

  /// console.log("After........");
  printList(list);
  //const removednode = list.shift();
  // printList(list);
  //console.log('.....removed', removednode);

  // list.unshift('Thailand');
  // printList(list);

  // console.log(list.remove(5));

  //printList(list);
}


module.exports = doubleMethods;
