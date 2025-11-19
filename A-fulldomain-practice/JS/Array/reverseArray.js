let arr=[2,7,1,3,1,8,6,2,5,11]

// let res=[]
// for(let i=arr.length-1;i>=0;i--){
//     res.push(arr[i])
// }
// for(let i=0;i<res.length;i++){
//     arr[i]=res[i]
// }
// console.log(arr)



//////////////method 2/////////////////

let left=0
let right=arr.length-1
while(left<=right){
    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
    
    left++
    right--
}
console.log(arr)