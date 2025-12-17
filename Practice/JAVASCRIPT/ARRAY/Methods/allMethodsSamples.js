const numbers = [1,2,3,5,,7,8,4,9,2,4,7,8,0,2,2,1,6]

//Map
//double of each element in array
const double = numbers.map(i=>i*2)
// console.log(double)

//===================================


//Filter
//filter even numbers

const even = numbers.filter(n=>n%2===0)
// console.log(even)

//==================================

//Reduce
//sum of array
const sum =numbers.reduce((acc,curr)=>acc+curr)
console.log(sum)