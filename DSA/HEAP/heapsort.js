function heapsort(arr){
    let n=arr.length
    
    //built max heap
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,i,n)
    }
}


function hepify(arr,index,size){
    let large=index
    let left=(2*index)+1
    let right=(2*index)+2

    if(left<size && arr[left] > arr[large]){
        
    }
}