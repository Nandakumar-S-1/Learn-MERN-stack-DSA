const express=require('express')
const app=express()

app.use((req,res,next)=>{
    const err=new Error('Something went wrong')
    next(err)    
})

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send('Internal Server error: ',err.message)    
})

const port =3000
app.listen(port,()=>{
    console.log(`server is runing in http://localhost:${port}`);
})