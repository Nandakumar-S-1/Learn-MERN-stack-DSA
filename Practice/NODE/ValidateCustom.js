const express=require('express')
const app=express()

function Validate(req,res,next){
    let token= req.headers['tokenName']
    if(!token){
        return res.status(401).send('unauthorized')
    }
    next()
}
app.get('/secure', Validate, (req, res) => {
  res.send('Access granted to secure route!');
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});