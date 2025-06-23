function Fibonacci(n,str=[],fst=0,sec=1){
    if(n==0){
        return str
    }
    str.push(fst)
    return Fibonacci(n-1,str,sec,fst+sec)
}
console.log(Fibonacci(6));
