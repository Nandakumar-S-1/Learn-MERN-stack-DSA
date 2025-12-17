// Find Index of Target
function Target(arr,target,i=0){
    if(i==arr.length){
        return -1
    }
    if(arr[i]===target){
        return i
    }
    return Target(arr,target,i+1)
}
console.log(Target([1,3,5,2,6,4,6],4))