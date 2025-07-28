const customFilter = (arr,cb)=>{
   let res=[]
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}


console.log(customFilter([1,4,2,6,7,83,3,1],val=>val%2===0));
