function Check(num){
    return new Promise((res,rej)=>{
        if(num%2!==0){
            res(`${num} is odd`)
        }else{
            rej(`${num} is even`)
        }
    })
    .then(d=>console.log(d)
).catch(e=>console.log(e)
)
}
Check(5)