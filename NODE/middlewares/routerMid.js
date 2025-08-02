const express = require('express')
const app= express()
const router= express.Router()
const port=3000

router.use((req,res,next)=>{
    console.log('router in middle');
    next()
})

router.get('/',(req,res)=>{
    res.send('this is the home route')
})
router.get('/shop',(req,res)=>{
    res.send('this is the shop route')
})
app.use('/all',router)
app.listen(port,()=>{
    console.log(`server is running... http://localhost:${port}`);
    
})