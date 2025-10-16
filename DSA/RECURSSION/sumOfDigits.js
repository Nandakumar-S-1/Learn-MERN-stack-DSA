// function SumOfDigits(n) {
//     if(n===0){
//         return 0
//     }
//     return (n%10)+SumOfDigits(Math.floor(n/10))
// }
// console.log(SumOfDigits(53412));


function SumOfDigits(n){
    let str=n.toString()
    if(str.length===0){
        return 0
    }
    return parseInt(str[0])+SumOfDigits(str.slice(1))
}
console.log(SumOfDigits(12345));



function SumOfDigit(n,i=0){
    
    let str=n.toString()

    if(i==str.length){
        return 0
    }

    let curr=parseInt(str[i])
    let sum=SumOfDigit(n,i+1)

    return curr+sum
}

console.log(SumOfDigit(102))
