let arr=[3,6,1,0,9,5,0,8,6,0,6,7,4,8,1,1,7,4,0,]

function Prime(arr){
  for(let i=arr.length-1;i>=0;i--){
    if(isPrime(arr[i])){
      arr.splice(i,1)
    }
  }
  return arr
}
function isPrime(num){
  if(num<2){
    return false
  }
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      return false
    }
  }
  return true
}
console.log(Prime(arr))