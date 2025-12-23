const students = [
  { name: "A", age: 20, marks: [80, 70, 90] },
  { name: "B", age: 21, marks: [60, 75, 85] },
  { name: "C", age: 19, marks: [90, 95, 85] }
];

for(let i=0;i<students.length;i++){
    let sum=0
    for(let j=0;j<students[i].marks.length;j++){
        sum+=students[i].marks[j]
    }
    students[i].total = sum
}

students.sort((a,b)=>a.total-b.total)
console.log(students)