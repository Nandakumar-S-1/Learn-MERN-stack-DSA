const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('server is running')
    next()    
})
app.get('/home',(req,res)=>{
    res.send('welcome to home page')
})

app.listen(3000)