let arr=[2,7,[1,3,[1]],8,6,[2,5],11]

function nested(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(nested(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
console.log(nested(arr))