//largest odd number
const arr = [1,4,6,3,87,99,45,71,8]
let largest = arr.reduce((acc,curr)=>curr%2 !==0 && curr > acc ? curr : acc)
console.log(largest);
