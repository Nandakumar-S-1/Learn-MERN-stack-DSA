// Capitalize Words
function Capitalize(arr,res=[],ind=0){
     if(arr.length===ind){
         return  res
     }
     res.push(arr[ind].toUpperCase())
     return Capitalize(arr,res,ind+1)
}
console.log(Capitalize(['a','bc','def']))