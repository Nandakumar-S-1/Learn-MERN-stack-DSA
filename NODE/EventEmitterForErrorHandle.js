const EventEmitter = require('events')

const emiter = new EventEmitter()

emiter.on('error',(err,context)=>{
    console.log(`error in context ${context} `);
    console.log(err.message)
})

function Operation(){
    try {
        throw new Error('something went wrong')
    } catch (error) {
        emiter.emit('error',error,'operation')
    }
}
Operation()