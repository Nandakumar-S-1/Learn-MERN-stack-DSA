// Find Minimum in Array

function Minimum(arr,min=Infinity,ind=0){
    if(ind===arr.length){
        return min
    }
    if(arr[ind]<min){
        min=arr[ind]
    }
    return Minimum(arr,min,ind+1)
}
console.log(Minimum([4,6,5,3,8]))