// using Array methods Filter,Indexof,Last indexof. Where Removes  the elements which have a copy

function RemoveDuplicates(arr){
    return arr.filter((x)=> arr.indexOf(x)==arr.lastIndexOf(x))
}
console.log(RemoveDuplicates([1,2,3,4,5,6,3,4]));

//Remove Duplicates aka Find Unique only using Freq and using additional array. Remove elements with copy, only shows elements with one occurence
function RemoveDup(arr){
    let freq={}
    let res=[]
    let index=0

    for(let i of arr){
        freq[i]=(freq[i] || 0)+1
    }
    for(let i in freq){
        if(freq[i]===1){
            res[index++]=Number(i)
        }
    }
    return res
}
console.log(RemoveDup([1,2,3,4,2,3,5,6,6]));
