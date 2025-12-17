//regular method

const SumOfArray = function(arr){
let i=0
let sum=0
while(i<arr.length){
    sum+=arr[i]
    i++
}
return sum
}
console.log(SumOfArray([2,4,6,11,66]))

//using reduce

function SumOfArrayReduce(arr){
    return arr.reduce((acc,curr)=>acc+curr)
}
console.log(SumOfArrayReduce([2,6,1,7,12]));

//using reccursion
function Sum(arr,index=0){
    if(index===arr.length){
        return 0
    }
    return arr[index]+Sum(arr,index+1)
}
console.log(Sum([1,3,22,64,10]));
