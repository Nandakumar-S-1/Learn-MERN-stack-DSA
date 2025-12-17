const express = require('express')
const app=express()
const router = express.Router()



/////////////////////////////router level middleware///////////////////////////

// router.use((req,res,next)=>{
//     console.log(`this is only for api route`);
//     next()
// })
// router.get('/user/:id',(req,res)=>{
//     res.send('This is the user profile')
// })

// app.use('/api',router)


///////////////////////////error handler middleware///////////////////////////

// app.use((req,res,next)=>{
//     let err=new Error(`something went wrong here`)
//     next(err)
// })

// app.use((err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).send('Internal Server error occured',err.message)
// })

/////////////////////////Router chaining//////////////////////////
router.route('/user/:id').get((req,res)=>{
    res.send(`user with id: ${req.params.id} has been fetched`)
}).post((req,res)=>{
    res.send(`creating new user with id : ${req.params.id} `)
}).put((req,res)=>{
    res.send(`user with id : ${req.params.id} has been updated` )
})

app.use('/api',router)

app.listen(3000,()=>{
    console.log(`http://localhost:${3000}`);
    
})