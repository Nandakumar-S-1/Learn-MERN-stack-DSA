class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

let head=new Node(1)
head.next =new Node(2)
head.next.next=new Node(3)
head.next.next.next=new Node(4)

console.log(head)
head.next.next=head.next

// console.log(head)

function hasCycle(head){
    let slow=head
    let fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            return true
        }
    }
    return false
}

console.log(hasCycle(head))