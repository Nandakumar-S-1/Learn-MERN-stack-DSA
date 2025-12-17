class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        if(!this.isEmpty()){
            return this.items.pop()
        }
        return 'underflow'
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
        return  'underflow'
    }
    print(){
        console.log(this.items)
    }
    Sort(){
        let temp=new Stack()
        while(!this.isEmpty()){
            let curr=this.pop()

            while(!temp.isEmpty() && temp.peek()<curr){
                this.push(temp.pop())
            }

            temp.push(curr)
        }
        while(!temp.isEmpty()){
            this.push(temp.pop())
        }
    }
}

let stack =new Stack()

stack.push(5)
stack.push(1)
stack.push(8)
stack.push(0)
stack.push(3)
stack.push(4)

stack.print()

stack.Sort()
stack.print()