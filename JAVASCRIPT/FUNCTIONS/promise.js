// let mango = false

// let promise = new Promise((resolve, reject)=>{
//     if(mango){
//         resolve("True")
//     }else{
//         reject("False")
//     }
// })

// .then((res)=>console.log(res))
// .catch((error)=>console.log(error))


////////////////////////////////////////////

// let dark = false
// const promise = new Promise((resolve,reject)=>{
//     if(dark){
//         resolve("Dark theme active")
//     }else{
//         reject('Light theme active')
//     }
// })

// .then((val)=>console.log(val))
// .catch((err)=>console.log(err))

///////////////

// let arr=[4,2,0]
// const prom = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             res(true)
//             return
//         }else{
//             rej(false)
//             return
//         }
//     }
//     },2000)
// })

// .then(res=>console.log(res))
// .catch(rej=>console.log(rej))

///////////////////////////

const myPromise =new Promise((resolve,reject)=>{
    const mark=8
    if(mark>10){
        resolve('passed')
    }else{
        reject('failed')
    }
})
myPromise.then((success)=>{
    console.log(success)    
}).catch((err)=>{
    console.log(err)
})

