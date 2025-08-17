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
    append(val){
        let node=new Node(val)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            prev.next=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            return 'list is empty'
        }
        else{
            let curr=this.head
            let list=''
            while(curr){
                list+=`${curr.val}=>`
                curr=curr.next
            }
            return list
        }
    }
    reverse(){
        let prev=null
        let curr=this.head
        let next=null
        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    search(val){
        let curr=this.head
        let index=0
        while(curr){
            if(curr.val==val){
                return index
            }
            curr=curr.next
            index++
        }
        return -1
    }
    
}