// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      const newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    pop() {
      if (this.length === 0) {
        return undefined;
      }
  
      let current = this.head;
      let newTail = current;
  
      while (current.next) {
        newTail = current;
        current = current.next;
      }
  
      newTail.next = null;
      this.tail = newTail;
      this.length--;
  
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  
    shift() {
      if (this.length === 0) {
        return undefined;
      }
      const currentHeadToBeRemoved = this.head;
      this.head = this.head.next;
      this.length--;
  
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHeadToBeRemoved;
    }
  
    unshift(val) {
      const newNode = new Node(val);
  
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
  
      return this;
    }
  
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
  
      let foundNode = null;
      for (let counter = 0; counter <= index; counter++) {
        if (counter === 0) {
          foundNode = this.head;
          continue;
        } else {
          foundNode = foundNode.next;
        }
      }
  
      return foundNode;
    }
  
    set(index, value) {
      const foundNode = this.get(index);
      if (foundNode === null) {
        return false;
      }
  
      foundNode.val = value;
      return foundNode;
    }
  
    insert(index, value) {
      if (index === 0) {
        return !!this.unshift(value);
      }
      if (index === this.length) {
        return !!this.push(value);
      }
  
      if (index < 0 || index >= this.length) {
        return false;
      }
  
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
    remove(index) {
      if (index === 0) {
        return this.shift();
      }
      if (index === this.length) {
        return this.pop();
      }
  
      const prevNode = this.get(index - 1);
      const nodeDeleted = prevNode.next;
      prevNode.next = prevNode.next.next;
  
      this.length--;
      return nodeDeleted;
    }
  
    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
  
      let prev = null;
      let next;
  
      for (let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
  
      return this;
    }
  }
  
  function singlyListMethods() {
    // var first = new Node("Hi")
    // first.next = new Node("there")
    // first.next.next = new Node("how")
    // first.next.next.next = new Node("are")
    // first.next.next.next.next = new Node("you")
  
    var list = new SinglyLinkedList();
    list.push("China");
    list.push("Japan");
    // console.log(list);
    list.push("India");
    list.push("UK");
    list.push("USA");
  
    // list.insert(1, "Germany");
  
    // for (obj in list) {
    //   console.log(list[obj]);
    // }
    // console.log("head", list.head);
    // console.log("next", list.head.next);
    // console.log("tail", list.tail);
  
    //list.pop();
    //list.pop();
    // list.pop();
    // console.log("removed", removedItem);
  
    //list.unshift("my man");
    // const foundNode = list.get(2);
  
    // console.log(foundNode);
    // const newValueAtIndex2 = list.set(2, "Pak");
    // console.log(newValueAtIndex2);
  
    //list.remove(1);
    for (obj in list) {
      console.log(list[obj]);
    }
    list.reverse();
    for (obj in list) {
      console.log(list[obj]);
    } //
  }
  
  module.exports = singlyListMethods;
  