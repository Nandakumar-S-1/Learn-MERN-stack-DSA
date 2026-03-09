let arr=[1,2,3,4,5]

function sum(arr,i=0){
    if(arr.length===i)return 0
    return sum(arr,i+1)+arr[i]
}
console.log(sum(arr))

