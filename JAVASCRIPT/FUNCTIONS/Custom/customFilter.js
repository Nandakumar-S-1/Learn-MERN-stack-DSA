function CustomMap(arr,cb){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i)){
            res.push(arr[i])
        }
    }
    return res
}
console.log(CustomMap([1,2,3,4,5,6],x=>x%2))