const Limiter = require('express-rate-limit')
const express = require('express')
const app= express()

const d = Limiter({
    windowMs:60*60*10,
    max:5,
    message:'too many request, wait for some times'
})

app.use('/',d)
app.get('/home',(req,res)=>{
    res.send('hello world')
})

app.listen(3000)