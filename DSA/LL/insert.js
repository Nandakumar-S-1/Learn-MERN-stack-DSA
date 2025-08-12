class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class LL{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    prepend(val){
        let node = new Node(val)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    
}