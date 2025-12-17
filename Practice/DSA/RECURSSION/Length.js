// Find Length of String/Array

function Length(arr,i=0){
    if(i===arr.length){
        return 0
    }
    return Length(arr,i+1)+1
}
console.log(Length([1,2,3,4,5]))