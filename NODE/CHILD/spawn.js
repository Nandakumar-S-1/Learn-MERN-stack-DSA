// spawn() for running a command and streaming data (continuous output)
// Good for large or real-time output (doesn’t store everything in memory)

//Spawinging shell shwoing the data in the current directory
///////////////////////////////////////

const { spawn } = require('child_process');

const lists = spawn('dir', { shell: true });

lists.stdout.on('data', (data) => {
  console.log('Output:', data.toString());
});

lists.stderr.on('data', (error) => {
  console.log('Error:', error.toString());
});

lists.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});


/////////////////////////////////////////

// const ls = spawn("cmd.exe",["/c","dir"])
// ls.stdout.on("data",(data)=>{
//    console.log(`output ${data}`);
// })
// ls.stderr.on("data",(data)=>{
//    console.log(`error :${data}`)
// })

// ls.on("close",(code)=>{
//    console.log(`exited with ${code}`);
// })

//////////////////////////////////

const list=spawn('dir',{shell:true})

list.stdout.on('data',(data)=>{
   console.log(`got the succesfull data ${data}`);
})
list.stderr.on('data',(err)=>{
   console.log(`got an error ${err}`)   
})
list.on('close',(code)=>{
   console.log(`exited with ${code} code`);
   
})

