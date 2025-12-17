const {spawn} = require('child_process')
const child = spawn('node',['one.js'])

child.stdout.on('data',(data)=>{
    console.log(`result is : ${data}`);
})
child.on('close',()=>{
    console.log(`child process compleated`)
})