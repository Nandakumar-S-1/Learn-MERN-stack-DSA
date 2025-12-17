function* generator(){
    yield 1
    yield 2
    yield 3
}
let res = generator()
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

////////////infinite, means gen function doesnt stop

function* countGen(){
    let count=0
    while(true){
       yield count++
    }
}

let cf=countGen()

for(let i=0;i<5;i++){
    console.log(cf.next());
}    