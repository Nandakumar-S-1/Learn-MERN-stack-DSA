function BinarySearch(arr,target){
    return Search(arr,target,0,arr.length-1)
}
function Search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let mid= Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }else if(target<arr[mid]){
        return Search(arr,target,left,mid-1)
    }else{
        return Search(arr,target,mid+1,right)
    }
}
console.log(BinarySearch([1,2,3,3,3,4,5,6,7,7,8],6))