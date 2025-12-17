const express = require('express')
const app=express()

app.get('/divide/:a',(req,res)=>{
  let a= parseInt(req.params.a)
  let b=parseInt(req.query.b)
  if(b===0) res.send(`divide by zero is not allowed`)
  else res.send(a/b)
})

app.listen(3000)