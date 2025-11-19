let arr=[2,7,1,3,1,8,6,2,5,11]

let large=-Infinity
let sec=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        sec=large
        large=arr[i]
    }else if(arr[i]>sec && arr[i]!==large){
        sec=arr[i]
    }
}
console.log(sec)