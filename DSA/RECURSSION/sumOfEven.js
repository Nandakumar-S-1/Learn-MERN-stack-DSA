// Sum of Even Numbers in Array

function EvenSum(arr,i=0){
    if(i===arr.length){
        return 0
    }
    let sum=0
    if(arr[i]%2===0){
        sum+=arr[i]
    }
    return EvenSum(arr,i+1)+sum
}


console.log(EvenSum([1,2,3,4,5,2,3]))