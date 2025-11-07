function RemoveDup(arr){
    return arr.filter((i,ind)=>arr.indexOf(i)==ind)
}
console.log(RemoveDup([1,2,3,4,4,5,3,1,6,7]));
