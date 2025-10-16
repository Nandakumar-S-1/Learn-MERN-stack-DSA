//  Power Function
function Power(num,pow){
    if(pow===0){
        return 1
    }
    return Power(num,pow-1)*num
}
console.log(Power(5,2))