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

let mathStudent=''
let scienceStudent=''
let englishStudent=''
let historyStudent=''

let sc=0
let m=0
let e=0
let h=0

for(let s of students){
    for(let i in s.marks){
        if(s.marks.math>m){
            m=s.marks.math
            mathStudent=s.name
        } 
        if(s.marks.english>e){
            e=s.marks.english
            englishStudent=s.name
        }  
        if(s.marks.science>sc){
            sc=s.marks.science
            scienceStudent=s.name
        }  
        if(s.marks.history>h){
            h=s.marks.history
            historyStudent=s.name
        }     
    }
}

console.log('historyStudent is ',historyStudent,'\n mathStudent is ',mathStudent,'\nenglishStudent is ',englishStudent,'\nscienceStudent is ',scienceStudent)
