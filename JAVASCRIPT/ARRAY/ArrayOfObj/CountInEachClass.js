const students = [
  { name: "A", class: "X" },
  { name: "H", class: "Z" },
  { name: "N", class: "X" },
  { name: "D", class: "X" },
  { name: "A", class: "X" },
  { name: "B", class: "Y" },
  { name: "C", class: "Y" },
];

// let count=students.reduce((acc,curr)=>{
//     acc[curr.class]=(acc[curr.class]||0)+1
//     return acc
// },{})
// console.log(count)

let count = {};
for (let i = 0; i < students.length; i++) {
  let curr = students[i].class;
  if (count[curr]) {
    count[curr] += 1;
  } else {
    count[curr] = 1;
  }
}
console.log(count);
