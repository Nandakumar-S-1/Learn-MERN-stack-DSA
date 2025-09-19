function Reverse(arr) {
    let left=0
    let right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp

        left++
        right--
    }
    return arr
}

let arr=[1,5,6,5,7,5,8,5]
console.log(Reverse(arr))