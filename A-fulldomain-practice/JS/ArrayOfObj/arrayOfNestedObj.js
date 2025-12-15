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
let max=0
let name=''
for(let s of students){
    let sum=0
    for(let i in s.marks){
        sum+=s.marks[i]
    }
    if(sum>max){
        max=sum
        name =s.name
    }
}

console.log(name)

