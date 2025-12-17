const {fork} =  require('child_process')
const child = fork('./childFork.js')

child.on(`message`,(mes)=>{
    console.log(`message is:  ${mes}`)    
})