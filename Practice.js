const express = require('express')
const app=express()

app.get('/sum/:num1',(req,res)=>{
  let num1=parseInt(req.params.num1)
  let num2=parseInt(req.query.num2)

  let sum=num1+num2
  res.send('sum of 2 numbers is :',sum)
})

app.listen(3000)
