function Unique(arr){
    let res=[]
    let freq={}
    let index=0
    for(let i of arr){
        freq[i]=(freq[i] || 0) +1
    }
    for(let i in freq){
        if(freq[i]==1){
            res[index++]=Number(i)
        }
    }
    return res
}
console.log(Unique([1,2,3,4,5,2,3,4]));
