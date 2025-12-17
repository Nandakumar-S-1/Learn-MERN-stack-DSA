const express=require('express')
const app=express()

app.use((req,res,next)=>{
    if(req.method==='POST'){
        return res.status(400).send('Post is blocked')
    }
    next()
})