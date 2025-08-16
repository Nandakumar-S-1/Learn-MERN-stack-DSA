function heapSort(arr){
    let n=arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        console.log("before "+ "arr- "+arr,"   i-"+i," n-   "+n,"\n")
        hepify(arr,i,n)
        console.log("after "+ "arr- "+arr,"   i-"+i," n-   "+n,"\n")
    }
    for(let i=n-1;i>0;i--){
        
        [arr[0],arr[i]]=[arr[i],arr[0]]
        hepify(arr,0,i)
    }
    return arr
}

function hepify(arr,index,size){
    console.log("Inside heapify  arr",arr, "index ",index, " -size - "+size ,"\n" )
    
    let largest=index
    let left = (2*index)+1
    let right=(2*index)+2

    console.log("largest ",largest  ," left ",left ," right ",right ,"\n");

    if(left<size && arr[left]>arr[largest]){
        largest=left
    }
    if(right<size&& arr[right]>arr[largest]){
        largest=right
    }
    console.log("l- ",largest," index ",index ,"\n");
    
    if(largest!==index){
        [arr[index],arr[largest]]=[arr[largest],arr[index]]
        hepify(arr,largest,size)
    }
}

let arr=[11,2,5,7,4,33,88]

console.log(heapSort(arr));