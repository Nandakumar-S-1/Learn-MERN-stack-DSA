class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    if (this.items.length === 0) {
      return "underflow";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items);
  }
}

function SortStack(main) {
  let temp = new Stack();
  while (!main.isEmpty()) {
    let curr = main.pop();

    while (!temp.isEmpty() && temp.peek() > curr) {
      main.push(temp.pop());
    }
    temp.push(curr);
  }
  return main;
}
