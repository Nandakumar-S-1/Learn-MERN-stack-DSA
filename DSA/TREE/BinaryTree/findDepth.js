class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BT{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
            return
        }
        let queue=[this.root]
        while(queue.length){
            let curr=queue.shift()
            if(!curr.left){
                curr.left=node
                return
            }else{
                queue.push(curr.left)
            }
            if(!curr.right){
                curr.right=node
                return
            }else{
                queue.push(curr.right)
            }
        }
    }
    FindDepth(node=this.root,lev){
        if(!node) return 0
        let leftD=this.FindDepth(node.right,lev+1)
        let rightD=this.FindDepth(node.left,lev+1)
        return Math.max(leftD,rightD)+1
    }
}



let bt=new BT()

bt.insert(8)
bt.insert(3)
bt.insert(9)
bt.insert(1)
bt.insert(5)
bt.insert(7)
bt.insert(2)
bt.insert(6)

console.log(bt.FindDepth());



// function FindDepth(node,lev){
//     if(node===null){
//         return 0
//     }
//     const left=FindDepth(node.left,lev+1)
//     const right=FindDepth(node.right,lev+1)
//     return Math.max(left,right)+1
// }