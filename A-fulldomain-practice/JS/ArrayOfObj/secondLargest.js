const students = [
  { name: "Amit", marks: 78 ,class:'D'},
  { name: "Riya", marks: 92, class: 'A' },
  { name: "Sam", marks: 85, class: 'B' },
  { name: "Neha", marks: 70, class: 'B' },
  { name: "John", marks: 88, class: 'C' },
  { name: "Kiran", marks: 95, class: 'A' },
  { name: "Arun", marks: 80, class: 'C' }
];



let fst= -Infinity
let sec= -Infinity
let s=null
let f=null

for(let i of students){
    if(i.marks >fst){
        sec=fst
        s=f
        fst=i.marks
        f=i
    }else if(i.marks>sec && i.marks<fst){
        sec=i.marks
        s=i
    }
}
console.log(s)