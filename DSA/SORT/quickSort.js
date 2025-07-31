function QuickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot= arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}
console.log(QuickSort([2,5,1,7,4,8,5,9]));
