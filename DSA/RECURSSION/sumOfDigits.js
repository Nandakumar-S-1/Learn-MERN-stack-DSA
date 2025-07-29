function SumOfDigits(n) {
    if(n===0){
        return 0
    }
    return (n%10)+SumOfDigits(Math.floor(n/10))
}
console.log(SumOfDigits(53412));
