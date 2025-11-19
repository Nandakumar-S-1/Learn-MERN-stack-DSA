let arr=[5,6,1,5,8,2,5,9,0]

///////////////Bubble/////////////
function Bubble(arr){
  for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<arr.length;j++){
          if(arr[i]>arr[j]){
              [arr[i],arr[j]]=[arr[j],arr[i]]
          }
      }
  } 
  return arr
}
console.log(Bubble(arr))


///////////////insertion///////////

function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let j=i-1
        let val =arr[i]
        while(j>=0 && arr[j]>val){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=val
    }
    return arr
}
console.log(insertion(arr))


////////////////selection////////////////////
function selection(arr){
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!==i){
            [arr[min],arr[i]]=[arr[i],arr[min]]
        }
    }
    return arr
}

console.log(selection(arr))

//////////quick//////////////////

function Quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...Quick(left),pivot,...Quick(right)]
}
console.log(Quick(arr))

////////////////merge//////////////////////

function MergeSort(arr){
    if(arr.length<2)return arr
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    
    return Merge(MergeSort(left),MergeSort(right))
}
function Merge(left,right){
    let res=[]
    while(left.length && right.length){
        if(left[0]>right[0]){
            res.push(right.shift())
        }else{
            res.push(left.shift())
        }
    }
    return [...res,...left,...right]
}
console.log(MergeSort(arr))

//////////////heap/////////////////////

function Heap(arr){
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
function heapify(arr,ind,size){
    let largest=ind
    let left=(2*ind)+1
    let right=(2*ind)+2
    if(left<size && arr[left]>arr[largest]){
        largest=left
    }
    if(right<size && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!==ind){
        [arr[ind],arr[largest]]=[arr[largest],arr[ind]]
        heapify(arr,largest,size)
    }
}
console.log(Heap(arr))

///////////////////////////////
