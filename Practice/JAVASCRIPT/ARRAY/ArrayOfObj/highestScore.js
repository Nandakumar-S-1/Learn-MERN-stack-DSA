const students = [
  { name: "A", score: 89 }, { name: "B", score: 95 }, { name: "C", score: 70 }
];

//using reduce

// let res = students.reduce((acc,curr)=>{
//     return curr.score > acc.score ? curr : acc
// })
// console.log(res)

//iterative 

let high=students[0]
for(let i=1;i<students.length;i++){
    if(students[i].score>high.score){
        high=students[i]
    }
}
console.log(high)