//Unique in an array which means only one copy of each item, skipping duplicate elements

function Unique(arr){
    let res=[]
    let freq={}
    let index=0
    for(let i of arr){
        freq[i]=(freq[i] || 0) +1
    }
    for(let i in freq){
        res[index++]=Number(i)
    }
    return res
}
console.log(Unique([1,2,3,4,5,2,3,4]));
