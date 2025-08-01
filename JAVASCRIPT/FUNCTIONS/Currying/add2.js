function ADD(a){
    return function(b){
        return a+b
    }
}
let fst = ADD(5)
let sec = fst(7)
console.log(sec);
