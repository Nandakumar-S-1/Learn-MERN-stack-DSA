let pr1= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"bugatti")
})
let pr2 =new Promise((resolve,reject)=>{
    setTimeout(reject,3000,"Lamborgini")
})
let pr3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,'Ferrari')
})

//Returns the first fulfilled promise (ignores rejected ones) If all are rejected, it throws an AggregateError.
Promise.any([pr1,pr2,pr3])
.then((res)=>console.log('any',res))
.catch((rej)=>console.log('any',rej))

// Waits for all promises to fulfill.If any one fails, it immediately rejects.
Promise.all([pr1,pr2,pr3])
.then((res)=>console.log('all',res))
.catch((rej)=>console.log('all',rej))

//Returns the result of the first promise to settle (either resolve or reject).
Promise.race([pr1,pr2,pr3])
.then((res)=>console.log('race',res))
.catch((rej)=>console.log('race',rej))

//Waits for all promises to settle . Returns array of objects
Promise.allSettled([pr1,pr2,pr3])
.then((res)=>console.log('allSettled',res))
.catch((rej)=>console.log('allSettled',rej))
