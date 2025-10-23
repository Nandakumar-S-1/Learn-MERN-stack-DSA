const {parentPort,workerData}=require('worker_threads')

function factorial(n){
    if(n<0) throw new Error('Invalid input')
    return n===0 ? 1 : n*factorial(n-1)
}
const res=factorial(workerData.num)

// sending res to parent 
parentPort.postMessage(res)