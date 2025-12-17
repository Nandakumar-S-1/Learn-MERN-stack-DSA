const {Worker} = require('worker_threads')
const workerTh = new Worker('./worker.js')

workerTh.on('message',(res)=>{
    console.log(`result from the worker is: ${res}`)
})