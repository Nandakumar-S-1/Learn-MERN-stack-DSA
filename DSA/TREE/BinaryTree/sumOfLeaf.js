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
    sumOfLeaf(node=this.root){
        if(!node)return 0
        if(!node.left && !node.right){
            return node.value
        }
        return this.sumOfLeaf(node.left)+this.sumOfLeaf(node.right)
    }
    sumOfNonLeaf(node=this.root){
        if(!node)return 0
        if(!node.left && !node.right){
            return 0
        }
        return (node.value + this.sumOfNonLeaf(node.left)+this.sumOfNonLeaf(node.right))
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

console.log(bt.sumOfLeaf());
console.log(bt.sumOfNonLeaf());


