//using push method
function Reverse(arr){
    let rev=[]
    for(let i= arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }
    return rev
}
console.log(Reverse([1,2,3,4,5]));

//without using push

function reverseAr(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp

    }
    return arr
}
console.log(reverseAr([1,5,4,6,7,8]));

//using inbuilt methods

function Rev(arr){
    return arr.slice().reverse()
}
console.log(Rev([1,2,3,4]));






