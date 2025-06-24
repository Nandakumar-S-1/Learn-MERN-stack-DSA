// //capitalize first letter of each word
// let arr=['devan','belwin','al ameen','rohith']
// let res = []
// for(let i=0;i<arr.length;i++){
//    res =  arr.map(v=>{
//         return v.charAt(0).toUpperCase() + v.slice(1)
//     })
// }

// console.log(res);

// //Square the numbers and return only the even squares.

let numArr=[1,2,3,4,5,6,7]
   let newArr = numArr.map(val=>val*val)
                      .filter(num=>num%2===0)
console.log(numArr);
console.log(newArr);

// //Convert a list of numeric strings to numbers.

let strArr=['1','2','3']
// let numArr=[1,2,3,4]
console.log(strArr);

let numArray = strArr.map(i=>Number(i))
console.log(numArray);

//////////////////