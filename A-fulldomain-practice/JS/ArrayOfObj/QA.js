let arr=[
  {
    id: 1,
    name: 'Aarav',
    grade: '10',
    scores: { math: 85, science: 90, english: 78 },
    activities: [ 'cricket', 'music' ]
  },
  {
    id: 2,
    name: 'Diya',
    grade: '9',
    scores: { math: 92, science: 88, english: 95 },
    activities: [ 'debate', 'chess' ]
  },
  {

    id: 3,
    name: 'Kabir',
    grade: '10',
    scores: { math: 76, science: 70, english: 82 },
    activities: null
  },
  {
    id: 4,
    name: 'Maya',
    grade: '8',
    scores: { math: 89, science: 94, english: 91 },
    activities: [ 'dance' ]
  },
  {
    id: 5,
    name: 'Arjun',
    grade: '9',
    scores: { math: 55, science: 65, english: 60 },
    activities: [ 'football' ]
  }
]

// 2.find every students total marks

function TotalMarks(arr ){
    for(let i of arr){
        let sum=0
        for(let j in i.scores){
            sum+=i.scores[j]
        }
      i.total = sum
    }
    console.log(arr)
}
TotalMarks(arr)

// 1.find the student who scored highest mark in english 

// let maxSt=''
// let maxEng=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i].scores.english >maxEng){
//         maxEng=arr[i].scores.english 
//         maxSt=arr[i].name
//     }
// }
// console.log(maxSt);



