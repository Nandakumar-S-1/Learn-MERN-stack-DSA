let arr = [5,0,6,0,5,3,19,5,5,6,1,7,8,5,16,11,9,5,0,0,4]

function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,i,n)
    }
    for(let i=n-1;i>0;i--){
        [arr[i],arr[0]]=[arr[0],arr[i]]
        heapify(arr,0,i)
    }
    return arr
}

function heapify(arr,ind,size){
    let largest =ind
    let left=(2*ind)+1
    let right=(2*ind)+2
    
    if(left<size && arr[left]>arr[largest]){
        largest=left
    }
    if(right<size && arr[right]>arr[largest]){
        largest= right
    }
    if(largest!==ind){
        [arr[ind],arr[largest]]=[arr[largest],arr[ind]]
        heapify(arr,largest,size)
    }
}

console.log(heapsort(arr))
