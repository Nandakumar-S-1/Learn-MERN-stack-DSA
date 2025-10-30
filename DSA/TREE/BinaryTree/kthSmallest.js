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
    kthSmall(k,node=this.root){
        let arr=[]
        function dfs(node){
            if(!node) return
            dfs(node.left)
            arr.push(node.value)
            dfs(node.right)
        }
        dfs(node)
        arr.sort((a,b)=>a-b)
        return arr[k-1]
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

console.log(bt.kthSmall(5));

