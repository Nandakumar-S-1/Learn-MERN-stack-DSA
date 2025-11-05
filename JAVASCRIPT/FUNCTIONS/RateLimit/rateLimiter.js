const express = require('express')
const rateLimiter=require('express-rate-limit')
// when we call rateLimiter ,it will return a function

const app=express() 

//create a middleware which is the funciton that returned by ratelimiter
const limit=rateLimiter({
    //this is an options object
    max:5,
    windowMs:60*60*10,
    message:'too many req obtained, try after some time'
})

app.use('/api',limit)