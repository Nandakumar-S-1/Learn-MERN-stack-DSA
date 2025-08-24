// we can create a command inside our shell and get the output in the terminal
const {exec} = require('child_process');

//to list files in currnet directory in human readable format

exec('ls -lh',(err,stdout,stderr)=>{
    //if an error executing command
    if(err){
        console.log(`err command is not valid: ${err}`);
        return
    }
    //other error menans related to system
    if(stderr){
        console.log(`std error ${stderr}`);
        
    }
//success
    console.log(`output succes ${stdout}`);
    
})


//use case is for small commands pwd and all


//if the output is huge we wont ba able to use it, because we wont be able to print it all in the console 
//means it has a buffer size, if the directory has lot of isze its max sizew will exceed