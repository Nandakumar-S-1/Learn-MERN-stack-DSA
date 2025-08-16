module.exports =function Validate(req,res,next){
    const headerName='MyCustom-Header'
    const headerVal=req.header[headerName]

    if(!headerVal){
        return res.status(400).json({
            success:false,
            message:'missing required header '
        })
    }
    next()
}
//====================================use in express================
const express = require('express');
const validateHeaders = require('./middleware/validateHeaders');

const app = express();

app.use(validateHeaders);

app.get('/secure-data', (req, res) => {
  res.json({ message: 'You passed the header validation!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
