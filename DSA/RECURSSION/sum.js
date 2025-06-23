function Sum(arr,index=0){
    if(index===arr.length){
        return 0
    }
    return arr[index]+Sum(arr,index+1)
}
console.log(Sum([11,22,33,12,23,34]));
