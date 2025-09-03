class Graph{
    constructor(){
        this.graph={}
    }
    addV(v){
        if(!this.graph[v]){
            this.graph[v]=[]
        }
    }
    addE(v,w){
        if(!this.graph[v]){
            this.addV(v)
        }
        if(!this.graph[w]){
            this.addV(w)
        }
        this.graph[v].push(w)
        this.graph[w].push(v)
    }
    bfs(start){
        let queue =[start]
        let visited=[start]
        let res=[]
        while(queue.length){
            let curr=queue.shift()
            res.push(curr)
            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    visited.push(n)
                    queue.push(n)
                }
            })
        }
        return res
    }
    dfs(start){
        let stack=[start]
        let visited=[start]
        let res=[]
        while(stack.length){
            let curr=stack.pop()
            res.push(curr)
            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    visited.push(n)
                    stack.push(n)
                }
            })
        }
        return res
    }
    shortestPath(start,end){
        let queue=[[start]]
        let visited=new Set([start])
        while(queue.length){
            let path=queue.shift()
            let node=path[path.length-1]
            
            if(node===end){
                return path
            }
            for(let n of g.graph[node]){
                if(!visited.has(n)){
                    visited.add(n)
                    queue.push([...path,n])
                }
            }
        }
        return null
    }
}

let g=new Graph()
g.addV("A")
g.addV("B")
g.addV("C")
g.addV("D")
g.addE("A","B")
g.addE("B","D")
g.addE("A","C")


// console.log(g.graph)
console.log(g.bfs("A"))

console.log("Shortest Path A → D:", g.shortestPath("A", "D"));