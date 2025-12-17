// Count Digits

function CountDigits(n,i=0){
    let str=n.toString()
    if(i==str.length){
        return 0
    }
    return CountDigits(n,i+1)+1
}

console.log(CountDigits(533))