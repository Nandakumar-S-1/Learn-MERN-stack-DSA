//remove a value from a specific index
let arr=[2,4,6,3,1,2,3,6,4,7]
let ind=5
let res=[]
for(let i=0;i<arr.length;i++){
  if(i===ind){
    continue
  }else{
    res.push(arr[i])
  }
}
console.log(res)


// inplace

for(let i=ind;i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr.length--
console.log(arr)