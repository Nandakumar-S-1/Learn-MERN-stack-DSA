let arr=[
  19, 18,  2, 3,  0, 4, 6,
   6,  9, 14, 7, 11, 2, 0,
   1,  5,  4, 7,  2, 1
]
for(let i=0,j=arr.length-1;i<j;i++,j--){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
console.log(arr)
