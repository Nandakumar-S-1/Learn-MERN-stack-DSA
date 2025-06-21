class Queue{
    constructor(){
        this.items=new Array()
    }
    isEmpty(){
        this.items.length===0
    }
    enQueue(value){
        this.items.push(value)
    }
    deQueue(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    print(){
        console.log(this.items)
    }
}
let queue =new Queue()

queue.print()
let i=1
while(i<=5){
    queue.enQueue(i*(i+1))
    i++
}
queue.print()
console.log(queue.deQueue())
queue.print()
console.log(queue.front())
queue.print()