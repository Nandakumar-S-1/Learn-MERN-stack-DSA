let arr=[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [13,14,15,16]
]

for(let i=0;i<arr.length;i++){
    if(i==0){
        console.log(arr[i])
    }
    if(i<arr.length-1 && i>0){
        console.log(arr[i][arr.length-1-i])
    }
    if(i==arr.length-1){
        console.log(arr[i])
    }
}

