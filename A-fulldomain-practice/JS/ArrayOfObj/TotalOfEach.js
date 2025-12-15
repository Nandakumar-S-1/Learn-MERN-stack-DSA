const students = [
  {
    name: "Aarav",
    rollNo: 1,
    marks: {
      math: 85,
      science: 90,
      english: 78,
      history: 88
    }
  },
  {
    name: "Diya",
    rollNo: 2,
    marks: {
      math: 92,
      science: 95,
      english: 89,
      history: 94
    }
  },
  {
    name: "Rohan",
    rollNo: 3,
    marks: {
      math: 70,
      science: 65,
      english: 72,
      history: 68
    }
  },
  {
    name: "Meera",
    rollNo: 4,
    marks: {
      math: 88,
      science: 84,
      english: 91,
      history: 86
    }
  }
];

// // student with lowest total marks

let sum=0
let low=Infinity
let lowStudent=null
for(let s of students){
    sum=0
    for(let i in s.marks){
        sum+=s.marks[i]
    }
    if(sum<low){
        low=sum
        lowStudent=s.name
    }
}
// console.log(lowStudent)


///////////////////////////////////////

// // how many students got marks for maths above 80

let count=0
for(let s of students){
    if(s.marks.math >=80){
        count++
    }
}
console.log(count)

////////////Find the topper in each subject///////////////////////////

let topMath=''
