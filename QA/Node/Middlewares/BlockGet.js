const express=require('express')
const app=express()

app.use((req,res,next)=>{
    if(req.path=='/home' && req.method==='GET'){
        return res.status(403).send('access denied')
    }
    next()
})

app.get('/profile',(req,res)=>{
    res.send('profile')
})

app.get('home',(req,res)=>{
    res.send('home page')
})

app.listen(3000)