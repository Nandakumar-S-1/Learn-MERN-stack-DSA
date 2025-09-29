const students = [
  { name: "Alice", class: "A", score: 85 },
  { name: "Bob", class: "B", score: 92 },
  { name: "Charlie", class: "A", score: 78 },
  { name: "David", class: "C", score: 95 },
  { name: "Eve", class: "B", score: 88 }
];

//1. Find the student with the highest score
const top = students.reduce((acc,curr)=>
    curr.score > acc.score ? curr : acc
)
console.log(top)


// 2. Count of students in each class
const count=students.reduce((acc,curr)=>{
    acc[curr.class]=(acc[curr.class]||0)+1
    return acc
},{})

console.log(count)