class Stack {
  constructor() {
    this.items = new Array();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.items.length-1]
  }
  contains(val){
    let top=this.peek()
    for(let i=0;i<top;i++){
        if(top.val===val){
            return true
        }
    }
    return false
  }
}

let s=new Stack()
let i=0
while(i<5){
    stack.push(i+i)
    i++
}
console.log(s.contains(5));

