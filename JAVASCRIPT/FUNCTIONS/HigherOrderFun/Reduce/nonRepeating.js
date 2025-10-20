function NonRepeat(arr){
    const freq=arr.reduce((acc,curr)=>{
        acc[curr]=(acc[curr]||0)+1
        return acc
    },{})
    return arr.filter((val)=>freq[val]===1)
}
console.log(NonRepeat([1,2,3,1,4,5,3,5]));
