const express = require('express')
const app=express()

function Protect(req,res,next){
    const token=req.headers.authorization
    if(!token){
        return res.status(401).json({message:' Access has been denied'})
    }
    if(token==='my-tok'){
        next()
    }else{
        res.status(403).json({message:'Invalid token'})
    }
}

app.get('/public',(req,res)=>{
    res.send('this is the public route')
})

app.get('/protected',Protect,(req,res)=>{
    res.send('this is protected route')
})


app.listen(3000)
