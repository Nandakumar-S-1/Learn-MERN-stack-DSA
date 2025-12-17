const express=require('express')
const  app=express()

app.get('/category/:types/:price',(req,res)=>{
    const {types,price}=req.params
    
    res.send(`showing ${types}'s under ${price}`)
})

app.listen(3000)