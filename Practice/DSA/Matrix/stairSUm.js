let arr = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]
    
let sum=0
for(let i=0;i<arr.length;i++){
    sum+=arr[i][i]
    if(i!==arr.length-1){
        sum+=arr[i][i+1]
    }
}
console.log(sum)