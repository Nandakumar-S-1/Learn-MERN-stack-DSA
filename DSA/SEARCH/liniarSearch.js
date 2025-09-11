function Liniar(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
}
console.log(Liniar([1,3,1,4,2,5],5))