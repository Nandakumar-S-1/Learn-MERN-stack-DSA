//Spawinging shell shwoing the data in the current directory

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


/////////////////////////////////////////

const ls = spawn("cmd.exe",["/c","dir"])
ls.stdout.on("data",(data)=>{
   console.log(`output ${data}`);
})
ls.stderr.on("data",(data)=>{
   console.log(`error :${data}`)
})

ls.on("close",(code)=>{
   console.log(`exited with ${code}`);
})