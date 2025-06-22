class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    enQueue(value){
        this.items.push(value)
    }
    deQueue(){
        return this.items.shift()
    }
    front(){
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }
    print(){
        console.log(this.items)
    }
}

class Stack{
    constructor(){
        this.q1=new Queue()
        this.q2=new Queue()
    }
    push(value){
        while(!this.q1.isEmpty()){
            this.q2.enQueue(this.q1.deQueue())
        }
        this.q1.enQueue(value)

        while(!this.q2.isEmpty()){
            this.q1.enQueue(this.q2.deQueue())
        }
    }
    pop(){
        if(!this.q1.isEmpty()){
            return this.q1.deQueue()
        }
        return 'underflow'
    }
    peek(){
            return this.q1.front()
    }
    display(){
        console.log(this.q1.items.toString())
    }
}

let stack =new Stack()
let  i=0
while(i<5){
    stack.push(i)
    i++
}
stack.display()
console.log(stack.pop());

stack.display()
console.log(stack.peek());
