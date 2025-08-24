//hariprasad

const students = [
  { name: "Alice", class: "A", score: 85 },
  { name: "Bob", class: "B", score: 92 },
  { name: "Charlie", class: "A", score: 78 },
  { name: "David", class: "C", score: 95 },
  { name: "Eve", class: "B", score: 88 }
];

//1 -find the student with highest score
const topStudent =  students.reduce((max,s)=>
    s.score > max.score ? s : max
,students[0])

console.log(topStudent);


//2 -count of students in each class
const count = students.reduce((acc,curr)=>{
    acc[curr.class]=(acc[curr.class] || 0)+1
    return acc
},{})

console.log(count);
