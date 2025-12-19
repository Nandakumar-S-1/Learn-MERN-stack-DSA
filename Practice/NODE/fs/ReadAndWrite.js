const fs=require('fs')

const express = require('express')
const app=express()

app.get('/file',(req,res)=>{
    let d=new Date()
    fs.writeFile('file2.txt',`${d.toDateString()}`,(err)=>{
        if(err){
            res.status(500).send('error while writing',err)
        }
        fs.readFile('file2.txt','utf8',(err,data)=>{
            if(err){
                res.status(500).send('error reading',err)
            }
            res.send(`data has been read: ${data}`)
        })
    })
})

app.listen(3000)