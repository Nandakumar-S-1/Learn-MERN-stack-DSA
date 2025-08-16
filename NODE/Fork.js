const {fork} =require('child_process')

const child = fork('child.js')

child.on('message',(mex)=>{
    console.log('parent got a message ',mex);
})

child.send({task:'start'})