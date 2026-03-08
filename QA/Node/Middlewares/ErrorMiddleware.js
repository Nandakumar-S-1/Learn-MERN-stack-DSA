
const express =  require('express')
const app = express()

app.get('/',(req,res,next)=>{
    const err = new Error('something went wrong')
    next(err)
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    res.status(500).json({
        succcess:false,
        message:err.message
    })
})

app.listen(3000)