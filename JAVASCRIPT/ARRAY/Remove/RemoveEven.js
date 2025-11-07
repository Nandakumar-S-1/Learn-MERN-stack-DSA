let arr=[3,6,1,0,9,5,0,8,6,0,6,7,4,8,1,1,7,4,0]

function Selection(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      arr.splice(i,1)
      i--
    }
  }
  return arr
}
console.log(Selection(arr))