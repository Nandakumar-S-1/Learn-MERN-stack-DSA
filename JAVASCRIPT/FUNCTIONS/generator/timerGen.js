//Generator function with timer
function* countGen(){
    let i=1
    while(i<=5){
        yield i++
    }
}

const gen = countGen()
let interval = setInterval(()=>{
    let next = gen.next()
    if(next.done)clearInterval(interval)
    else console.log(next.value);
},1000)