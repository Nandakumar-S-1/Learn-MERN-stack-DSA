
const express=require('express')
const app=express()


app.use((req,res,next)=>{
    if(req.method==='POST'){
        res.send('get requests are not allowed')
    }
    next()
})
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000)