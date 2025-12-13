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
    autocomplete(prefix){
        let node=this.root
        let res=[]
        for(let char of prefix){
            if(!node.child[char]){
                return res
            }
            node=node.child[char]
        }
        this.collect(node,prefix,res)
        return res
    }
    collect(node,prefix,res){
        if(node.isEnd){
            res.push(prefix)
        }
        for(let char in node.child){
            this.collect(node.child[char],prefix+char,res)
        }
    }
    longestPrefix(word){
        let long=''
        let pref=''
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                break
            }
            node=node.child[char]
            pref+=char
        }
        if(node.isEnd) long=pref
        return long
    }
}

let t=new Trie()
t.insert('a')
t.insert('an')
t.insert('and')
t.insert('as')
t.insert('b')
t.insert('be')
t.insert('best')

// console.log(t.search('aaa'))
// console.log(t.startsWith('bests'));
// console.log(t.autocomplete('a'));
console.log(t.longestPrefix('bess'));






