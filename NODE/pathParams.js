const express=require('express')
const app=express()

app.get('/users/:userId',(req,res)=>{
    const userId=req.params.userId
    res.send(`welcome ${userId}`)
})
const port =3001
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})