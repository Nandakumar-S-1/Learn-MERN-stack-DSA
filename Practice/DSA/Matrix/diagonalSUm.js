// 1. find sum of diagonals in single loop
let arr = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]

let sum=0
let len=arr.length-1
for(let i=0;i<arr.length;i++){
    sum+=arr[i][i]
    sum+=arr[i][len-i]
}
console.log(sum)

