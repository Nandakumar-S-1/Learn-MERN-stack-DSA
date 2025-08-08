function Reverse(arr,newArr=[],index=arr.length-1){
    if(index<0){
        return newArr
    }
    newArr.push(arr[index])
    return Reverse(arr,newArr,index-1)
}
console.log(Reverse([1,2,3,4,5,6]));
