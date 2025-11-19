let arr=[2,7,1,3,1,8,6,2,5,10]

let freq={}
let i=0
for(let val of arr){
    if( val%2===0 ){
        if(!freq[val]){
            arr[i++]=val
            freq[val]=1
        }
    }else{
        arr[i++]=val
    }
}
arr.length=i
console.log(arr)