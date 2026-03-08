const express = require('express')
const app=express()
const router = express.Router()


router.use((req,res,next)=>{
    console.log('middleware active for route')
    next()
})

router.get('/',(req,res)=>{
    res.send('base route')
})

router.get('/home',(req,res)=>{
    res.send('home route')
})

app.use('/all',router)

app.listen(3000,()=>{
    console.log(`server is running... http://localhost:${3000}`);
})