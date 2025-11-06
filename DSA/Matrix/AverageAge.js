const array = [
  [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ],

  [
    { id: 4, name: "Alice", age: 20 },
    { id: 5, name: "Mike", age: 40 },
    { id: 6, name: "Emma", age: 28 },
  ],
];
// outupt
function Result(array) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      total += array[i][j].age;
      count++;
    }
  }
  let avg = (total / count).toFixed();
let res=[]
  for (let i = 0; i < array.length; i++) {
    let curr = []
    for(let j=0;j<array[i].length;j++){
        let per=array[i][j]
        let diff=Math.abs(parseFloat(avg)-per.age)
        let compare = avg>=per.age ? "lower" : "higher"

        curr.push({
            name:per.name,
            age:per.age,
            averageAge:avg,
            ageDiff:`${compare} than average by ${diff}`
        })
    }
    res.push(curr)
  }
  return res
}

console.log(Result(array));

// [
//   [
//     {
//       name: 'John',
//       age: 25,
//       averageAge: '29.67',
//       ageDiff: 'Lower than average by 4.67'
//     },
//     {
//       name: 'Jane',
//       age: 30,
//       averageAge: '29.67',
//       ageDiff: 'Higher than average by 0.33'
//     },
//     {
//       name: 'Bob',
//       age: 35,
//       averageAge: '29.67',
//       ageDiff: 'Higher than average by 5.33'
//     }
//   ],
//   [
//     {
//       name: 'Alice',
//       age: 20,
//       averageAge: '29.67',
//       ageDiff: 'Lower than average by 9.67'
//     },
//     {
//       name: 'Mike',
//       age: 40,
//       averageAge: '29.67',
//       ageDiff: 'Higher than average by 10.33'
//     },
//     {
//       name: 'Emma',
//       age: 28,
//       averageAge: '29.67',
//       ageDiff: 'Lower than average by 1.67'
//     }
//   ]
// ]
