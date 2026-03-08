//without any  builtin methods


let arr = [5,0,6,0,5,3,19,5,5,6,1,7,8,5,16,11,9,5,0,0,4]
// let arr=[1,2,3,3,2,1]

let f=-Infinity
let s=-Infinity
let t=-Infinity

for(let i=0;i<arr.length;i++){
    if(arr[i]>f){
        t=s
        s=f
        f=arr[i]
    }else if(arr[i]>s && arr[i]<f){
        t=s
        s=arr[i]
    }else if(arr[i]>t && arr[i]<s){
        t=arr[i]
    }
}
console.log(t)