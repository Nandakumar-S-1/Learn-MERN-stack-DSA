let arr=[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [13,14,15,16]
]

let top=0
let left=0
let bottom=arr.length-1
let right=arr[0].length-1
let res=[]
while(top<=bottom && left<=right){
    for(let i=left;i<=right;i++){
        res.push(arr[top][i])
    }
    top++
    for(let i=top;i<=bottom;i++){
        // console.log(arr[i][right])
        res.push(arr[i][right])
    }
    right--
    if(top<=bottom){
        for(let i=right;i>=left;i--){
        res.push(arr[bottom][i])
    }
    bottom--
    }
    if(left<=right){
        for(let i=bottom;i>=top;i--){
            res.push(arr[i][left])
        }
    }
    left++
}

console.log(res)