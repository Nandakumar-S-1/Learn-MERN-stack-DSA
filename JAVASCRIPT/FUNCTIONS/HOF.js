function Square(ar,fn){
    return ar.map(fn)
}
console.log(Square([1,2,3,4],(i)=>i*2));