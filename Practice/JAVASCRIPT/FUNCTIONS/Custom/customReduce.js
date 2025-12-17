function CustomReduce(arr,cb,init){
    let acc=init
    for(let i=0;i<arr.length;i++){
        acc = cb(acc,arr[i],i)
    }
    return acc
}
console.log(CustomReduce([1,2,3,4,5],(a,b)=>a+b,0));
