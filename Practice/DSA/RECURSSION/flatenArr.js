//to convert a nested array into regular array
function Flat(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        if(Array.isArray(val)){
            res=res.concat(Flat(val))
        }else{
            res.push(val)
        }
    }
    return res
}
console.log(Flat([11,22,[33,44],55,[66,77,88]]));
