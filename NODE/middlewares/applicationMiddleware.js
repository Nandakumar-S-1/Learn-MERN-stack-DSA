const express = require('express')
const app=express()
const port=3004

app.use((req,res,next)=>{
    console.log('server is loading');
    next()    
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`server is running in :- https://localhost${port}`);
})