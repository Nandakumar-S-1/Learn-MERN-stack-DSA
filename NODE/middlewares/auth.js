function isAuth(req,res,next){
    if(req.session.id){
        next()
    };
    res.status(401).json({message:'hshshsh'})
};

app.get('/home',isAuth,(req,res)=>{
    res.send('Home page')
})