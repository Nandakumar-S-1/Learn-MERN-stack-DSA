function* Generator(){
    let i=1
    while(i<=10)yield i++
}

let gen=Generator()
let interval=setInterval(()=>{
    let next=gen.next()
    if(next.done) clearInterval(interval)
    else console.log(next.value)
},1000)
