class Stack{
    constructor(){
        this.items=new Array()
    }
    isEmpty(){
        return  this.items.length===0
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return null
        }return this.items[this.items.length-1]
    }
    disply(){
        console.log(this.items)
    }
}
let stack =new Stack()
let i=0
stack.disply()
console.log(stack.isEmpty())
while(i<5){
    stack.push(i+i)
    i++
}
console.log(stack.isEmpty())
stack.disply()
console.log(stack.pop())
stack.disply()