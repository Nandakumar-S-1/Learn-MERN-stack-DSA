function customReduce(arr,cb,init){
    let acc=init !==undefined ? init : arr[0]
    let start = init !==undefined ? 0 : 1
    for(let i=0;i<arr.length;i++){
        acc=cb(acc,arr[i],i,arr)
    }
    return acc
}

let sum=customReduce([1,2,4,3,5],(acc,curr)=>acc+curr,0)
console.log(sum)