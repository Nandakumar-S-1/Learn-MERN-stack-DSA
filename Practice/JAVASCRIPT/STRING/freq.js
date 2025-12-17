function Frequency(arr){
    let freq={}
    for(let i of arr){
        freq[i]=(freq[i]||0)+1
    }
    return freq
}
console.log(Frequency(['a','b','b','c','a','d']));