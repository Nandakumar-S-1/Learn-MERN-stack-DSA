const express=require('express')
const app=express()

function checkLogin(req,res,next){
    const {isLogged}=req.query
    if(req.path=='/' && !isLogged){
        res.send('access denied')
    }else{
        return next()
    }
}

app.get('/',checkLogin,(req,res)=>{
    res.send('welcome to profile')
})
app.listen(3000)


//http://localhost:3000/?isLogged=true
