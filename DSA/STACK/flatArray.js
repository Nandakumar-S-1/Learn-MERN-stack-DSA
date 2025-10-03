function Flat(arr){
    let stack=[...arr]
    let res=[]
    while(stack.length){
        let val=stack.pop()
        if(Array.isArray(val)){
            stack.push(...val)
        }else{
            res.push(val)
        }
    }
    return res.reverse()
}
console.log(Flat([1,2,[3,4],5]));
