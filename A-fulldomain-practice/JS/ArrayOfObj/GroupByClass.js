const students = [
  { name: "Amit", marks: 78 ,class:'D'},
  { name: "Riya", marks: 92, class: 'A' },
  { name: "Sam", marks: 85, class: 'B' },
  { name: "Neha", marks: 70, class: 'B' },
  { name: "John", marks: 88, class: 'C' },
  { name: "Kiran", marks: 95, class: 'A' },
  { name: "Arun", marks: 80, class: 'C' }
];

let groups={}
for(let i of students){
    let cls=i.class 
    if(!groups[cls]){
        groups[cls]=[]
    }
    groups[cls].push(i)
}
console.log(groups)





