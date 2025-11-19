const cluster=require('cluster')
const http=require('http')

if(cluster.isMaster){
    // When you start the app, Node creates a master process first.
    // The master does not handle HTTP requests , it just spawns workers
    
    console.log(`master process ${process.pid} is running`);
    
    // This creates two worker processes, each running the same file again —
    // but this time, cluster.isMaster will be false inside them.
    cluster.fork()
    cluster.fork()
    // The master process: creates workers
    // The workers: run the HTTP server
}
else{
  console.log(`worker process ${process.pid} is running`)    
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('home page')
    }else if(req.url==='/delay'){
        for(let i=0;i<600000000;i++){}
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('delay page')
    }
})
server.listen(3000,()=>{
console.log(`server is running in http://localhost:${3000}`)
})
}