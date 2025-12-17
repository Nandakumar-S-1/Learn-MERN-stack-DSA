const sum = arr => arr.reduce((acc,curr)=>{
    if(curr%2!==0) acc+= curr
    return acc
},0)

let arr=[1,2,3,4,5,6,7]
console.log(sum(arr));
