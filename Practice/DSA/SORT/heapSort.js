function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,i,n)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,0,i)
    }
    return arr
}
function heapify(arr,index,size){
    let largest = index
    let left=(2*index)+1
    let right=(2*index)+2    

    if(left<size && arr[left]>arr[largest]){
        largest=left
    }
    if(right<size && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!==index){
        [arr[index],arr[largest]]=[arr[largest],arr[index]]
        heapify(arr,largest,size)
    }
}

let arr=[11,4,6,2,66,4,22]