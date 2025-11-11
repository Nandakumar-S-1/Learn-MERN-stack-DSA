const express=require('express')
const app=express()

// app.get('/users/:userId',(req,res)=>{
//     const userId=req.params.userId
//     res.send(`welcome ${userId}`)
// })


//sum
app.get('/sum/:num1/:num2',(req,res)=>{
    let num1 = parseFloat(req.params.num1)
    let num2= parseFloat(req.params.num2)
    let sum= num1+num2
    res.send(`Sum using path params is ${sum}`)
})

const port =3001
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})