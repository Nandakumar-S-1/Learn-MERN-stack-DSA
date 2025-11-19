// move to end 
let arr=[1,0,2,3,0,0,4,0,5]
let ind=0
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        arr[ind]=arr[i]
        ind++
    }
}
while(ind<arr.length){
    arr[ind]=0
    ind++
}
console.log(arr,ind)

//move to start

let pos=arr.length-1
for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!==0){
        arr[pos]=arr[i]
        pos--
    }
}
while(pos>=0){
    arr[pos]=0
    pos--
}
console.log(arr)