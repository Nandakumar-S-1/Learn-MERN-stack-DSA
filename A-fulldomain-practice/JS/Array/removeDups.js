//  Remove Duplicates from Array in place
function Remove(arr){
    let freq={}
   let i=0
   for(let val of arr){
    if(!freq[val]){
        arr[i++]=val
        freq[val]=1
    }
   }
   arr.length=i
   return arr
}
console.log(Remove([1,4,5,2,3,2,1]));
