const express = require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('middleware has been activated');
    next()
})