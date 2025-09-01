function customMap(arr,cb){
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(cb(arr[i],i))
    }
    return res
}

console.log(customMap([1,2,3,4,5,6],(x)=>x+2));
