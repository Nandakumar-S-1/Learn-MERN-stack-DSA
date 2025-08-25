//it is used to run executable files in a seperate process , Unlike exec Which runs commands

//execFile is a function in Node.js's child_process module that runs an executable file directly. 
// Unlike exec, it does not spawn a shell to run the command.

//When to Use execFile
//You should use execFile when you need to run a known, specific executable file with a set of arguments and want to avoid the security risks and performance overhead of a shell.
// A common use case is running a system utility or another script written in a different language, such as a Python or Bash script.




const {execFile} = require('child_process')

execFile('node',['--version',(error,stdout,stderr)=>{
    if(error){
        throw error
    }
    console.log('output :' ,stdout);
    
}])








































// const {execFile} = require('child_process')
// const args = ['10', '25'];

// execFile('python',['sum.py',...args],(err,stdout,stderr)=>{
//      if(err){
//         console.log(`err command is not valid: ${err}`);
//         return
//     }
//     //other error menans related to system
//     if(stderr){
//         console.log(`std error ${stderr}`);
        
//     }
// //success
//     const sum = parseInt(stdout);
//     console.log(`The sum of ${args[0]} and ${args[1]} is: ${sum}`);
// })