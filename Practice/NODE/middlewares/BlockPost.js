const BlockPost = (req,res,next)=>{
    if(req.method==='POST'){
        return res.status(403).send('post requests are not allowed  ')
    }
    next()
}
