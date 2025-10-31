function RemoveDup(arr){
    let res=[]
    let visited={}
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        if(num%2===0 && !visited[num]){
            res[res.length]=num
            visited[num]=true
        }else if(num%2!==0){
            res[res.length]=num
        }
    }
    return res
}
// console.log(RemoveDup([1,2,3,4,2,3,5,6,7,6,8]));





//Remove duplicate even numbers from array
let arr=[2,4,6,3,1,2,3,6,4,7]
let res=[]
let seen={}
for(let i=0;i<arr.length;i++){
  let val=arr[i]
  if(val%2===0){
    if(!seen[val]){
      seen[val]=true
      res.push(val)
    }
  }else{
    res.push(val)
  }
}
console.log(res)






