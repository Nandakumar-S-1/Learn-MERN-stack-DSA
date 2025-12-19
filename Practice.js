class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    enqueue(val){
        this.items.push(val)
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift()
        }
        return 'underflow'
    }
    front(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return 'underflow'
    }
    display(){
        console.log(this.items);
    }
}

class Stack{
    constructor(){
        this.q1=new Queue()
        this.q2=new Queue()
    }
    push(val){
        while(!this.q1.isEmpty()){
            this.q2.enqueue(this.q1.dequeue())
        }
        this.q1.enqueue(val)
        while(!this.q2.isEmpty()){
            this.q1.enqueue(this.q2.dequeue())
        }
    }
    pop(){
        if(!this.q1.isEmpty()){
            return this.q1.dequeue()
        }
        return 'underflow'
    }
    peek(){
        if(!this.q1.isEmpty()){
            return this.q1.front()
        }
        return 'underflow'
    }
    print(){
        return this.q1.display()
    }

}
let s=new Stack()


s.push(1)
s.push(1)
s.push(1)
s.push(6)
s.push(9)
s.print()
console.log(s.peek());

console.log(s.pop());
s.print()


