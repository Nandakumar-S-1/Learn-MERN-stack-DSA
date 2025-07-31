function MergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return Merge(MergeSort(left),MergeSort(right))
}
function Merge(left,right){
    let sorted=[]
    while(left.length && right.length){
        if(left[0]>=right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}

console.log(MergeSort([2,5,1,2,6,8,5,4,9,0,3]));