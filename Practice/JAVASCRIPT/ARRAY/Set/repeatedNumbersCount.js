let arr=[3,6,1,0,9,5,0,8,6,0,6,7,4,8,1,1,7,4,0]
let sett=new Set()

let count=0
for(let i of arr){
  if(!sett.has(i)){
    sett.add(i)
  }else{
    count++
  }
}
console.log(count)