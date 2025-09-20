function EvenFor(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3==0 && arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
EvenFor([1,2,3,4,5,6,12,18,5,3])



function EvenWhile(arr){
    let i=0
    while(i<arr.length){
        if(arr[i]%3==0 && arr[i]%2==0){
            console.log(arr[i])
        }
        i++
    }
}
EvenWhile([1,2,3,4,5,6,12,18,5,3])