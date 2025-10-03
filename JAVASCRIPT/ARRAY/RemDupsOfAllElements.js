function Remove(arr){
    let set=new Set()
    let res=[]
    for(let i of arr){
        if(!set.has(i)){
            set.add(i)
            res.push(i)
        }
    }
    return res
}

console.log(Remove([1,2,3,2,3,5,6,7]));
