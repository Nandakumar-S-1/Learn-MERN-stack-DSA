//used to work with events in nodejs
//event is an action or change occur to our app that we can respond to
//using events module we can dispatch our own custom events and respond to those in a non blocking manner

const EventEmitter = require('node:events')
const emitter = new EventEmitter()

emitter.on('order-pizza',(size,type)=>{
    console.log(`order received , ${type} pizza of ${size} size is being baked`)
})
emitter.emit('order-pizza','large','tomato')
