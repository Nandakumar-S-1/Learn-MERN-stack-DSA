function* counting(s){
    for(let i=s;i>=0;i--){
        yield i
    }
}

const down = counting(100)
for(let i of down){
    console.log(i)
}
