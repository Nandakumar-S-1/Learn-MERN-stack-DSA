function Missing(arr,n){
    let sett = new Set(arr)
    let miss=[]
    for(let i=1;i<=n;i++){
        if(!sett.has(i)) miss.push(i)
    }
    return miss
}

console.log(Missing([1,2,3,5,7],7))
