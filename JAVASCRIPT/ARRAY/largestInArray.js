//with normal Loops
function Largest(arr){
    let i=0
    let max=0
    while(i<arr.length){
        if(max<arr[i]){
            max=arr[i]
        }
        i++
    }
    return max
}
console.log(Largest([2,5,1,55,31,27,11,9,53]))

// with built in method

function LargestVal(arr){
    return Math.max(...arr)
}
console.log(LargestVal([2,4,1,66,33,21,75,34]));
