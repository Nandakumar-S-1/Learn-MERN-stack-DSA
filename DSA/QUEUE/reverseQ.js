class Queue{
    constructor(){
        this.items=new Array()
    }
    isEmpty(){
        return this.items.length===0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items.shift()
    }
    front(){
        if(this.isEmpty()){
            return  'queue is empty'
        }
        return this.items[0]
    }
    display(){
        console.log(this.items)
    }
}

let q= new Queue()
q.enqueue(2)
q.enqueue(6)
q.enqueue(1)

q.display()

function Reverse(q){
   if(q.isEmpty()){
       return
   }
   let front=q.dequeue()
   Reverse(q)
   q.enqueue(front)
}
Reverse(q)

q.display()