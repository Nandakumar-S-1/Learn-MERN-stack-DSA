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

// async function Check(num){
//     try {
//         const d = await new Promise((res, rej) => {
//             if (num % 2 !== 0) {
//                 res(`${num} is odd`)
//             } else {
//                 rej(`${num} is even`)
//             }
//         })
//         return console.log(d)
//     } catch (e) {
//         return console.log(e)
//     }
// }
// Check(5)



// function pr(num){
//    return new Promise((resolve,reject)=>{
//     if(num%2===0){
//       resolve('Number is even')
//     }else {
//       reject('number is odd')
//     }
//   })
// }

// pr(7).then(d=>console.log(d)).catch(err=>console.log(err))