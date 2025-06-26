const express=require('express')
const app=express()

app.get('/search',(req,res)=>{
    const {q,page}=req.query
    res.send(`search query: ${q} , page ${page}`)
})

// app.get('/',(req,res)=>{
//     const num1 = parseInt(req.query.num1)
//     const num2=parseInt(req.query.num2)

// const sum=num1+num2
// res.send(`the sum of ${num1} & ${num2} is ${sum}`)
// })









const port=3001

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
        
})