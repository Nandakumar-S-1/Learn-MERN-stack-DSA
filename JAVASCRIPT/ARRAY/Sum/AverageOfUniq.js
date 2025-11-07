let arr=[3,6,1,0,9,5,0,8,6,0,6,7,4,8,1,1,7,4,0]

function Selection(arr){
  let sum=0
  let count=0
  let freq={}
  for(let i of arr){
    freq[i]=(freq[i]||0)+1
  }
  for(let i in freq){
    if(freq[i]===1){
      sum+=Number(i)
      count++
    }
  }
  return sum/count
}
console.log(Selection(arr))