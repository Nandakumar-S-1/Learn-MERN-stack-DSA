const {Worker}=require('worker_threads')

console.log(`main thread start`);


const worker = new Worker('./worker.js',{
    workerData:{num:10}
})

worker.on('message',(res)=>{
    console.log('Res from worker',res);
})

worker.on('error',(err)=>{
    console.error('Error from worker',err)
})

worker.on('exit',(code)=>{
    console.log(`worker stopped with exit code:- ${code}`);
})

console.log(`main thread end`);

