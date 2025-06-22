function BinarySearch(arr,target){
    let left=0
    let right=arr.length-1
    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(target===arr[mid]){
            return mid
        }else if(target<arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return left
}
console.log(BinarySearch([1,2,3,4,5,6],5))