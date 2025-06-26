const http=require('http')
const port =3600

const server = http.createServer((req,res)=>{
    res.statusCode =200
    res.setHeader('content-type','text/plain')
    res.end('server with http')
})

server.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
})
