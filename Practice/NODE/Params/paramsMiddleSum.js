const express =require('express')
const app=express()

function GetSUm(req,res,next){
    let a=Number(req.params.a)
    let b=Number(req.query.b)

    if(isNaN(a)|| isNaN(b)){
        return res.status(400).send('Enter valid numbers')
    }
    req.sum=a+b
    next()
}

app.get('/add/:a',GetSUm,(req,res)=>{
    res.send(`sum is ${req.sum}`)
})

app.listen(3001,()=>{
    console.log('3001');
    
})

//http://localhost:3001/add/5?b=8