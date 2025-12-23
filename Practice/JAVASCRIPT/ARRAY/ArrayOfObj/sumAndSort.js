const students = [
  { name: "A", age: 20, marks: { math: 80, sci: 70, eng: 90 } },
  { name: "B", age: 21, marks: { math: 60, sci: 75, eng: 85 } },
  { name: "C", age: 19, marks: { math: 90, sci: 95, eng: 85 } }
]

for(let i=0;i<students.length;i++){
    let sum=0
    for(let j in students[i].marks){
        sum+= students[i].marks[j]   
    }
    students[i].total=sum
}

students.sort((a,b)=>a.total-b.total)
console.log(students)