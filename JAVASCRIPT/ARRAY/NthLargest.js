function NthLargest(arr,n){
    let max
    let temp=[...arr]
    for(let i=0;i<n;i++){
        max=-Infinity
        let index=-1
        for(let j=0;j<temp.length;j++){
            if(max<temp[j]){
                max=temp[j]
                index=j
            }
        }
        temp.splice(index,1)
    }
    return max
}
console.log(NthLargest([2,1,5,3,7,5,8],2))