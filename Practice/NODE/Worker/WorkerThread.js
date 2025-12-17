const {Worker}=require('worker_threads')

console.log(`main thread start`);

//create an instance of the worker with the file
const worker = new Worker('./worker.js',{
    workerData:{num:10}
})
//success
worker.on('message',(res)=>{
    console.log('Res from worker',res);
})
//error
worker.on('error',(err)=>{
    console.error('Error from worker',err)
})
//exit code
worker.on('exit',(code)=>{
    console.log(`worker stopped with exit code:- ${code}`)
})

console.log(`main thread end`)