const students = [
  { name: "Amit", marks: 78 ,class:'D'},
  { name: "Riya", marks: 92, class: 'A' },
  { name: "Sam", marks: 85, class: 'B' },
  { name: "Neha", marks: 70, class: 'B' },
  { name: "John", marks: 88, class: 'C' },
  { name: "Kiran", marks: 95, class: 'A' },
  { name: "Arun", marks: 80, class: 'C' }
];

let g=[]
for(let i of students){
    let grade = ''

    if(i.marks>=90) grade = 'A'
    else if(i.marks >=80) grade = 'B'
    else grade='C'

    g.push({...i,grade})
}
console.log(g)