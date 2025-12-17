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
    starsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return true
    }
    autoComplete(prefix){
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
    longestPref(word){
        let node=this.root
        let prefix=''
        let longest = ''

        for(let char of word){
            if(!node.child[char]){
                break
            }
            node=node.child[char]
            prefix+=char
        }
        if(node.isEnd){
            longest=prefix
        }
        return longest
    }
    countWordsWithPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.child[char]){
                return 0
            }
            node=node.child[char]
        }
        let count=0
        const dfs = (n)=>{
            if(n.isEnd){
                count++
            }
            for(let char in n.child){
                dfs(n.child[char])
            }
        }
        dfs(node)
        return count
    }
    countTotalWOrds(){
        let count=0
        const dfs = (node)=>{
            if(node.isEnd) count++
            for(let char in node.child){
                dfs(node.child[char])
            }
        }
        dfs(this.root)
        return count
    }
}

let trie=new Trie()

trie.insert("ash")
trie.insert("ashika")
trie.insert("ashik")
trie.insert("bell")
trie.insert("belwin")
trie.insert("dev")
trie.insert("devan")


console.log(trie.autoComplete("as"))
console.log(trie.search("dev"))
console.log(trie.starsWith("di"))

console.log(trie.longestPref("ashikasivan"))
console.log(trie.countWordsWithPrefix('as'));
console.log(trie.countTotalWOrds())