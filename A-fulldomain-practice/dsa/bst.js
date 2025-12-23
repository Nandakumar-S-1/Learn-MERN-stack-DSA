class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root == null
    }
    insert(val) {
        let node = new Node(val)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.val < root.val) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, val) {
        if (root) {
            if (root.val === val) {
                return true
            } else if (root.val > val) {
                return this.search(root.left, val)
            } else {
                return this.search(root.right, val)
            }
        }
        return false
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.val)
            this.inorder(root.right)
        }
    }
    preorder(root){
        if(root){
            console.log(root.val)
            this.preorder(root.left)
            this.preorder(root.right)            
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.val);
            
        }
    }
    bfs(){
        let queue=[this.root]
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.val)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }            
        }
    }
    findMin(root){
        if(!root.left ){
            return root.val
        }else{
            return this.findMin(root.left)
        }
    }
    findMax(root){
        if(!root.right){
            return root.val
        }else{
            return this.findMax(root.right)
        }
    }
    findLeaf(root){
        if(!root){
            return 0
        }
        if(!root.left && !root.right){
            return 1
        }else{
            return this.findLeaf(root.left)+this.findLeaf(root.right)
        }
    }
    findNonLeaf(root){
        if(!root){
            return 0
        }
        if(!root.right && !root.left) return 0
        return this.findNonLeaf(root.left)+this.findNonLeaf(root.right)+1
    }
    maxDepth(root){
        if(!root){
            return 0
        }
        const l=this.maxDepth(root.left)
        const r = this.maxDepth(root.right)
        return Math.max(l,r)+1
    }
    maxHeight(node){
        if(!node)return -1
        let l = this.maxHeight(node.left)
        let r=this.maxHeight(node.right)
        return Math.max(l,r)+1
    }
}
function isBst(node,min=-Infinity,max=Infinity){
    if(!node)return true
    if(node.val<min || node.val>max){
        return false
    }
    return isBst(node.left,min,node.val)&&isBst(node.right,node.val,max)
}


let t = new BST()

 t.insert(8)
  t.insert(5)
   t.insert(12)
  t.insert(11)
   t.insert(7)
  t.insert(3)
   t.insert(5)
  t.insert(7)
// console.log(t.search(t.root, 9));
console.log(t.maxHeight(t.root));
console.log(isBst(t.root));

