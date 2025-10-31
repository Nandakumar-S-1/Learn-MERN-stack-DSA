//Find combo of two numbers which gives sum as target
let arr=[2,6,3,7,6,4,8,22,11,7,8]
let target=1

function Combo(arr,target){
  for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]===target){
      return [arr[i],arr[j]]
    }
  }
}
return [-1,-1]
}
console.log(Combo(arr,target))
