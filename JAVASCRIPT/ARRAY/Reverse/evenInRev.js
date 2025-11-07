function PrintEven(arr){
    let even=[]
    i=arr.length
    while(i>=0){
        if(arr[i]%2===0){
            even[even.length]=arr[i]
        }
        i--
    }
    return even
}
console.log(PrintEven([1,2,3,4,5,6,7]));
