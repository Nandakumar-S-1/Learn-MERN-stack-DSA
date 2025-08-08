function Unique(arr){
    return arr.filter((i)=>arr.indexOf(i)===arr.lastIndexOf(i))
}
console.log(Unique([1,2,3,4,2,3]));
