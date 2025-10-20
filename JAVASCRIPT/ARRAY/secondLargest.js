//Sorting and finding
function SecondLargest(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr[arr.length-2]
}
console.log(SecondLargest([3,5,1,6,7,3,55,22]));

//with sort function
function SecondLarge(arr){
    arr.sort((a,b)=>a-b)
    return arr[arr.length-2]
}
console.log(SecondLarge([11,22,1,55,33]));

//Without sorting

function SecondLargeWithoutSort(arr){
    if(arr.length<2){
        return 'To have a second largest element, Array should contain atleast 2 elements'
    }
    let large= -Infinity
    let second=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            second=large
            large=arr[i]
        }else if(arr[i]>second && arr[i] < large){
            second=arr[i]
        }
    }
    
    return second
}
console.log(SecondLargeWithoutSort([4,1,6,33,7,12]));
