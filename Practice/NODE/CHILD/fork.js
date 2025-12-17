const {fork} = require('child_process')

const child= fork("childForFork.js")
child.on("message",(msg)=>{
    console.log("Message form child ",msg);
})

child.send({task:"Start"})