const {parentPort} = require('worker_threads')

let sum=0
for(let i=0;i<10;i++){
    sum+=i
}

parentPort.postMessage(sum)








// Worker Threads allow Node.js to run JavaScript in multiple threads within the same process.
// Unlike child processes, worker threads share memory 
// Each worker has its own event loop but runs inside the same process.
// Worker threads are lighter and faster than child processes.
// They are ideal for CPU-intensive calculations.