const myPromise = new Promise((res,rej)=>{
    setTimeout(()=>res('data'),1000)
})
.then(d=>console.log(d))    