let arr = [5,0,6,0,5,3,19,5,5,6,1,7,8,5,16,11,9,5,0,0,4]

function mergesort(arr){
    if(arr.length<2)return arr
    let mid= Math.floor((arr.length)/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    
    return merge(mergesort(left),mergesort(right))
}
function merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0]>right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}
console.log(mergesort(arr))