// Transform student data with GPA comparison
const students = [
  [
    { id: 1, name: 'Tom', gpa: 3.5 },
    { id: 2, name: 'Jerry', gpa: 3.8 }
  ],
  [
    { id: 3, name: 'Mike', gpa: 3.2 },
    { id: 4, name: 'Sarah', gpa: 3.9 }
  ]
];
// Expected Output: Transform to include averageGpa and gpaDiff for each student
// Example: { name: 'Tom', gpa: 3.5, averageGpa: '3.60', gpaDiff: 'Below average by 0.10' }
// Write function: transformStudents(students)

function transformStudents(arr){
    let total=0
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            total+=arr[i][j].gpa
            count++
        }
    }
    let average=(total/count).toFixed(2)
    let res=[]
    for(let i=0;i<arr.length;i++){
        let curr=[]
        for(let j=0;j<arr[i].length;j++){
            let st=arr[i][j]
            let diff=Math.abs(st.gpa-average).toFixed(2)
            let compare = st.gpa > average ? 'Greater' : 'lesser'

            curr.push({
                name:st.name,
                gpa:st.gpa,
                averageGpa:average,
                gpaDiff:`${compare} average by ${diff}`
            })
            // console.log(curr);
            
        }
        res.push(curr)
    }
    return res
}
console.log(transformStudents(students))