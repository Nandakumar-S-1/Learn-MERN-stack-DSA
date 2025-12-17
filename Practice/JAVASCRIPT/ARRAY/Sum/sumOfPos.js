let arr=[1,-1,2,3,-5,-7,5]

let sum=arr.reduce((acc,curr)=>{
    if(curr>0){
        acc+=curr
    }
    return acc
},0)
console.log(sum)    