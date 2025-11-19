let students = [
  { name: "A", score: 89 }, { name: "B", score: 95 }, { name: "C", score: 70 }
];

let sum=0
let count=0
for(let i=0;i<students.length;i++){
    sum+=students[i].score
    count++
}
console.log(sum/count)