function Missing(arr,n){
    const exp=(n*(n+1)/2)
    const act=arr.reduce((acc,curr)=>acc+curr,0)
    return exp-act
}
console.log(Missing([1,2,3,4,6],7))