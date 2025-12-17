const express=require('express')
const app=express()

// app.get('/search',(req,res)=>{
//     const {q,page}=req.query
//     res.send(`search query: ${q} , page ${page}`)
// })

app.get('/sum',(req,res)=>{
    let num1=parseFloat(req.query.num1)
    let num2=parseFloat(req.query.num2)
    let sum=num1+num2
    res.send(`sum using query ${sum}`)
})



const port=3001

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
        
})