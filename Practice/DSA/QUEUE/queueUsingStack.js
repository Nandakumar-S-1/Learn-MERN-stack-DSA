class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length==0
    }
    push(val){
         this.items.push(val)
    }
    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'underflow'
        }return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items);
        
    }
}


class Q{
    constructor(){
        this.s1=new Stack()
        this.s2=new Stack()
    }
    enqueue(val){
        while(!this.s1.isEmpty()){
            this.s2.push(this.s1.pop())
        }
        this.s1.push(val)
        while(!this.s2.isEmpty()){
            this.s1.push(this.s2.pop())
        }
    }
    dequeue(){
        if(this.s1.isEmpty()){
            return 'underflow'
        }
        return this.s1.pop()
    }
    front(){
       if(this.s1.isEmpty()){
            return 'underflow'
        }
        return this.s1.peek() 
    }
    display(){
        console.log(this.s1.items);
        
    }
}

let q = new Q()
q.enqueue(4)
q.enqueue(3)
q.enqueue(1)
q.display()
console.log(q.dequeue());
