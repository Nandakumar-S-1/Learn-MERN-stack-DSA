const express = require('express')
const app=express()

app.get('/divide/:a/:b',(req,res)=>{
    const a=parseFloat(req.params.a)
    const b=parseFloat(req.params.b)
    if(b===0) return res.status(400).send('div by 0 is not valid')
    res.send(`res is ${a/b}`)
})

app.listen(3000,()=>{
    console.log('server is running');
    
})