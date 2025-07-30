const express= require('express')
const app= express()
app.use(express.json())
const port = 5000

app.get('/',(req,res)=>res.send('Hello this is get req'))
app.post('/',(req,res)=>res.json(req.body))

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
})