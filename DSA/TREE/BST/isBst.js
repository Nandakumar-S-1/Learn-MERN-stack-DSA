class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    
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
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

}
function isBst(node,min=-Infinity,max=Infinity){
    if(node===null){
        return true
    }
    if(node.value<=min||node.value>=max){
        return false
    }
    return isBst(node.left,min,node.value)&&isBst(node.right,node.value,max)
}

const bst = new BST()

bst.insert(2)
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)

console.log(isBst(bst.root))

bst.root.right.left=new Node(1)

console.log(isBst(bst.root)) 