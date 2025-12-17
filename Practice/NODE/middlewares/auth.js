// const express = require('express')
// const session= require('express-session')
// const app= express()

// app.use(express.json())

// app.use(session({
//     secret:'my-secret-key',
//     resave:false,
//     saveUninitialized:false,
//     cookie:{secure:false}

// }))

// function isAuth(req,res,next){
//     if(req.session.userId){
//         return next()
//     }
//     res.status(401).json({message:'Unauth access'})
// }

// app.post('/login',(req,res)=>{
//     const {username} =  req.body
//     if(username){
//         req.session.userId = username
//         return res.json({message:'login succesful'})
//     }
//     res.status(400).json({message:'username is req'})
// })

// app.get('/home',isAuth,(req,res)=>{
//     res.send(`welcome to home page ${req.session.userId}`)
// })

// app.post('/logout',(req,res)=>{
//     req.session.destroy(err=>{
//         if(err){
//             return res.status(500).json({message:'logout failed'})
//         }
//         res.json({message:'Logged out succesfully'})
//     })
// })

// const port = 3000
// app.listen(port,()=>{
//     console.log(`server is running in http://localhost:${port}`);
    
// })


//=======================================



// function isAuth(req,res,next){
//     if(req.session.id){
//         next()
//     };
//     res.status(401).json({message:'hshshsh'})
// };

// app.get('/home',isAuth,(req,res)=>{
//     res.send('Home page')
// })













