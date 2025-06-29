const http=require('http')
const port=3001

let server=http.createServer((req,res)=>{
    res.end('Server is running')
})

server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
})