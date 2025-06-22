
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
    }
    isEmpty(){
        return this.head==null
    }
    push(value){
        let node=new Node(value)
        node.next=this.head
        this.head=node
    }
    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }
        let temp=this.head
        this.head=this.head.next
        return temp.value
    }
    peek(){
        if(this.isEmpty()){
            return 'stack is Empty'
        }
        return this.head.value
    }
    print(){
        let curr=this.head
        while(curr!==null){
            console.log(curr.value)
            curr=curr.next 
        }
    }
}

let stack = new Stack()
let i=1
while(i<=5){
    stack.push(i)
    i++
}
stack.print()
stack.pop()
console.log("peeked value "+ stack.peek())
stack.print()