const express = require('express')
const app=express()
app.use((req,res,next)=>{
    req.cur = new Date()
    next()
})

app.get('/',(req,res)=>{
    res.send(`curr date is ${req.cur}`)
})
app.listen(3000)