let arr=[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [13,14,15,16]
]
  let val=[]

for(let i=0;i<arr.length;i++){
    let res=[]
   if(i%2==0){
       for(let j=0;j<arr[i].length;j++){
           res.push(arr[i][j])
       }
          val.push(res)
   }else{
       for(let j=arr[i].length-1;j>=0;j--){
           res.push(arr[i][j])
       }
          val.push(res)
   }


}
console.log(val)