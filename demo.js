//evenSum
let arr=[1,2,3,4,2,4,6,7]
let sum=arr.reduce((acc,curr)=>{
    if(curr%2===0){
        return acc+curr
    }else{
        return acc
    }
},0)

console.log(sum);
