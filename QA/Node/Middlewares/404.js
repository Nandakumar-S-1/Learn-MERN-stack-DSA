const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('middleware running')
    next()
})
app.get('/profile',(req,res)=>{
    res.send('profile')
})
app.get('/home',(req,res)=>{
    res.send('home')
})

app.use((req,res)=>{
    res.status(404).send('404 not found')
})
app.listen(3000)