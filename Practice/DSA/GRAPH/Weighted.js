class WG{
    constructor(){
        this.graph={}
    }
    addV(v){
        if(!this.graph[v]){
            this.graph[v]=[]
        }
    }
    addE(v,w,weight){
        if(!this.graph[v]){
            this.addV(v)
        }
        if(!this.graph[w]){
            this.addV(w)
        }
        this.graph[v].push({node:w,weight})
        this.graph[w].push({node:v,weight})
    }
    bfs(start) {
        let queue = [start]
        let visited = [start]
        let res = []
        while (queue.length) {
            let curr = queue.shift()
            res.push(curr)
            this.graph[curr].forEach(n => {
                if (!visited.includes(n.node)) {
                    visited.push(n.node)
                    queue.push(n.node)
                }
            })
        }
        return res
    }
}

let wg = new WG()

wg.addV("A")
wg.addV("B")
wg.addV("C")
wg.addV("D")

wg.addE("A", "B", 2)
wg.addE("A", "C", 4)
wg.addE("B", "D", 1)
wg.addE("C", "D", 3)

console.log("Graph:", wg.graph)
console.log("BFS from A:", wg.bfs("A")) 