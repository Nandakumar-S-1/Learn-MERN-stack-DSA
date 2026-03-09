let arr =[1,2,[3,4],5,6,[7,[8,9],10],11]

function nest(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        if(Array.isArray(val)){
            res=res.concat(nest(val))
        }else{
            res.push(val)
        }
    }
    return res
}

console.log(nest(arr))

