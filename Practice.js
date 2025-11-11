const fs=require('fs')

let data = fs.readFile('text.txt','utf8',(err,data)=>{
    if(err)console.log(err)
    else console.log(data)
})


