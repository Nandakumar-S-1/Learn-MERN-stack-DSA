let arr = [
  [1, 4, 7, 11],
  [8, 9, 10, 20],
  [11, 12, 17, 30],
];
function ValueExist(arr, tar) {
  let rowss = arr.length
  let colll=arr[0].length

  let i=0
  let j=colll-1
  while(i<rowss && j>=0){
    if(arr[i][j]===tar){
        return true
    }else if(arr[i][j]>tar){
        j--
    }else{
        i++
    }
  }
return false
}
