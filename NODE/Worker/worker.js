const {parentPort,workerData}=require('worker_threads')

function factorial(n){
    return n===0 ? 1 : n*factorial(n-1)
}
const res=factorial(workerData.num)

// sending res to parent 
parentPort.postMessage(res)