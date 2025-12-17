function Fibonacci(n,str=[],fst=0,sec=1){
    if(n==0){
        return str
    }
    str.push(fst)
    return Fibonacci(n-1,str,sec,fst+sec)
}
// console.log(Fibonacci(6));


function Fib2(n,fst=0,sec=1){
    if(n===0){
        return
    }
    console.log(fst)
    return Fib2(n-1,sec,fst+sec)    
}
Fib2(5)
