let arr = [5,0,6,0,5,3,19,5,5,6,1,7,8,5,16,11,9,5,0,0,4]

function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
    return arr
}
console.log(selection(arr))