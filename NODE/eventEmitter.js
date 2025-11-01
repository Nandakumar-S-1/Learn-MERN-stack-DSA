const Emitter= require('events')
const event=new Emitter()

event.on('sent',(name)=>{
    console.log(`hello ${name}`)    
})

event.emit('sent','nandu')