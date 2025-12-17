const fs=require('fs')
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    fs.renameSync('file1.txt','file2.txt')
    res.send('file rename succesfull')
})


app.listen(3000, () => {
    console.log(`Server running on http://localhost:${3000}`);
});