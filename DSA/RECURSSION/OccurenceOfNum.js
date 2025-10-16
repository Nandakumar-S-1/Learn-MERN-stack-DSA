// Count Occurrences of an Element
function Count(arr,num,i=0){
    let count=0
    if(i===arr.length){
        return 0
    }
    if(num==arr[i]){
        count++
    }
    return Count(arr,num,i+1)+count
}

console.log(Count([1,2,3,4,2,3,6,7,2,3,2],2))