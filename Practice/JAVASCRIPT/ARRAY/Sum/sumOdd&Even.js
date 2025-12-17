
function SumOfOdddAndEven(arr){
    let oddSum=0
    let evenSum=0
    
    let i=0
    while(i<arr.length){
        if(arr[i]%2===0){
            evenSum += arr[i]
        }else{
            oddSum += arr[i]
        }
        i++
    }
    return {evenSum,oddSum}
}
console.log(SumOfOdddAndEven([1,2,3,4]));


