const fs=require('fs')

function ReadFilePr(path){
    return new Promise((resolve,rejects)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if(err)rejects(err)
            else resolve(data)
        })
    })
}

ReadFilePr('file1.txt').then(data=>console.log(data)).catch(err=>console.log(err))