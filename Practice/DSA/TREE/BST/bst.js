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
    search(root,value){
        if(root){
            if(value===root.value){
                return true
            }else if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }
    bfs(){
        let q=[this.root]
        while(q.length){
            let curr=q.shift()
            console.log(curr.value);
            if(curr.left){
                q.push(curr.left)
            }if(curr.right){
                q.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
           return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}
function FindLeaf(root,res=[]){
    if(!root){
        return res
    }
    if(!root.left && !root.right){
        res.push(root.value)
    }
    FindLeaf(root.left,res)
    FindLeaf(root.right,res)
    return res
}


function MaxDepth(root){
    if(!root){
        return 0
    }
    const leftD=MaxDepth(root.left)
    const rightD=MaxDepth(root.right)

    return Math.max(leftD,rightD)+1
}

let bst= new BST()
bst.insert(7)
bst.insert(2)
bst.insert(9)
bst.insert(1)
bst.insert(4)

console.log('post');
bst.postorder(bst.root)