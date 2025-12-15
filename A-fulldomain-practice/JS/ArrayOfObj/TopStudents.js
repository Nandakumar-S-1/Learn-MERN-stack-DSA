const students = [
  { name: "Amit", marks: 78 ,class:'D'},
  { name: "Riya", marks: 92, class: 'A' },
  { name: "Sam", marks: 85, class: 'B' },
  { name: "Neha", marks: 70, class: 'B' },
  { name: "John", marks: 88, class: 'C' },
  { name: "Kiran", marks: 95, class: 'A' },
  { name: "Arun", marks: 80, class: 'C' }
];
let n = 3
let arr=[...students]
    let res=[]
for(let i=0;i<n;i++){
    let max=0
    for(let j=1;j<arr.length;j++){
        if(arr[max].marks<arr[j].marks){
            max=j
        }
    }
res.push(arr[max])
arr.splice(max,1)
}

console.log(res)






