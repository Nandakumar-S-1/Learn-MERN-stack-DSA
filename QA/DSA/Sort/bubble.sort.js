let arr = [5,0,6,0,5,3,19,5,5,6,1,7,8,5,16,11,9,5,0,0,4]

function bubble(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr
}
console.log(bubble(arr))