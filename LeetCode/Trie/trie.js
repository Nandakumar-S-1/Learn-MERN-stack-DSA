//208. Implement Trie (Prefix Tree)


class Node{
    constructor(){
        this.child={}
        this.isEnd=false
    }
}
class Trie{
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


        search(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return node.isEnd
    }
    startsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return true
    }
    autoCompleate(prefix){
        
    }
}