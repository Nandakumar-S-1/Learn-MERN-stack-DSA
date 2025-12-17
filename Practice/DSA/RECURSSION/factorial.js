function Factorial(n){
    //base case to stop executing when n is 0
    if(n===0){
        return 1
    }
    return Factorial(n-1)*n
}
console.log(Factorial(4));
