const express = require('express')
const app=express()

app.use((req,res,next)=>{
    req.Curr= new Date()
    next()
})

app.get('/',(req,res)=>{
    res.send(`current date is ${req.Curr}`)    
})

app.listen(3300)
