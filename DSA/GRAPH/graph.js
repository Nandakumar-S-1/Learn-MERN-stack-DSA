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
        let queue=[start]
        let visited =[start]
        let res=[]

        while(queue.length){
            let curr=queue.shift()
            res.push(curr)
            this.graph[curr].forEach(n => {
                if(!visited.includes(n)){
                    queue.push(n)
                    visited.push(n)
                }
            });
        }
        return res
    }
}