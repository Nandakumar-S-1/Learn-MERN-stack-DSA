function check(num){
    return new Promise((res,rej)=>{
        if(num%2==0)res(num,'is even')
        else rej(num,'is odd')
    })
    .then(d=>console.log(d))
    .catch(e=>console.log(e))
}

check(5)