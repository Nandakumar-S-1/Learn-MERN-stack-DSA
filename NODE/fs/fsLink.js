const fs=require('fs')

fs.link('file1.txt','file2.txt',err=>{
    if(!err) console.log('created a link');
    
})
