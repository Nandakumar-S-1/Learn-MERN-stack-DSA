const {spawn} = require('child_process');
const { error } = require('console');

const list = spawn('dir',{shell:true})

    list.on('error',(error)=>{
        console.log('Some error occured' ,error.message);
        
    })

 list.stderr.on('data',(error)=>{
    console.log(error);
 })
 list.stdout.on('data',(data)=>{
    console.log(data.toString());
    
 })