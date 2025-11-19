let arr=[1,2,3,4,5]
let val=3
for(let i=0;i<arr.length;i++){
   if(arr[i]===val){
       for(let j=i;j<arr.length-1;j++){
           arr[j]=arr[j+1]
       }
       arr.length=arr.length-1
       break
   }
}
console.log(arr)