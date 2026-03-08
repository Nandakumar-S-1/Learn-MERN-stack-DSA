let arr = [5,0,6,0,5,3,19,5,5,6,1,7,8,5,16,11,9,5,0,0,4]

function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        let j=i-1
        while(j>=0 && arr[j]<val){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=val
    }
    return arr
}
console.log(insertion(arr))