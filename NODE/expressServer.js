const express = require('express')
const app=express()

const port=3600
app.use((req,res,next)=>{
    console.log('server is opening ');
    next()
})
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
})
