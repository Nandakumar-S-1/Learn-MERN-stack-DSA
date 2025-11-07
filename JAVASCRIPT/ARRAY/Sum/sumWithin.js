function Sum(arr){
    return arr.filter((v)=>v%2===0).reduce((acc,curr)=>acc+curr,0)
}
console.log(Sum([1,2,3,4,5]));