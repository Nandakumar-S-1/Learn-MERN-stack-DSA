// function throttling(fn,delay){
//     let flag=false
//     return function(...args){
//         if(!flag){
//             fn.apply(this,args)
//             flag=true

//             setTimeout(()=>{
//                 flag=false
//             },delay)
//         }
//     }
// }


// function test(mes){
//     let date=new Date()
//     console.log(mes,date.toDateString())
// }

// let thr = throttling(test,500)
// setInterval(()=>{
//     thr('executing')
// },200)





