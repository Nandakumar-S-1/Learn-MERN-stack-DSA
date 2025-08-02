class Node{
    constructor(){
        this.child={}
        this.isEnd=false
    }
}
class TRIE{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.isEnd=true
    }
}