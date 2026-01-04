async function Fetch() {
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('data reseived')
        },2000)
    })
    return await p
}
Fetch().then(d=>console.log(d))