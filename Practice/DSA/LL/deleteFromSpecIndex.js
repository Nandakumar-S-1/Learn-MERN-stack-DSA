class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  deleteInd(ind) {
    if (ind < 0 || ind >= this.size) {
      return "invalid index";
    }
    if (ind === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < ind - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }
  DelSecLast() {
    if (this.isEmpty()) {
      return "list is empty";
    } else if (this.size === 1) {
      return "only one value exist";
    } else if (this.size == 2) {
      this.head = this.head.next;
      this.size--;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.next && curr.next.next.next) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
      this.size--;
    }
  }
  print() {
    if (this.isEmpty()) {
      return "list is empty";
    } else {
      let curr = this.head;
      let vals = ``;
      while (curr) {
        vals += `${curr.val}=>`;
        curr = curr.next;
      }
      return vals;
    }
  }
}

let list = new LL();

let i = 0;
while (i < 6) {
  list.prepend(i);
  i++;
}
console.log(list.print());
list.deleteInd(3);

console.log(list.print());
