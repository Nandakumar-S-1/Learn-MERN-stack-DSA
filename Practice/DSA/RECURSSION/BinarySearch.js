// Binary Search
function BS(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }else if(target<arr[mid]){
        return search(arr,target,left,right-1)
    }else{
        return search(arr,target,left+1,right)
    }
}

console.log(BS([1,2,3,4,5,6,7,8],6))