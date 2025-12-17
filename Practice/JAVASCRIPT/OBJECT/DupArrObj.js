const grade = [
  [{ mark: "A" }, { mark: "C" }, { mark: "A" }],
  [{ mark: "C" }, { mark: "C" }, { mark: "A" }],
  [{ mark: "A" }, { mark: "B" }, { mark: "C" }]
];


let sett = new Set()
let res=[]

for(let i=0;i<grade.length;i++){
    for(let j=0;j<grade[i].length;j++){
        let marks=grade[i][j].mark
        if(!sett.has(marks)){
            sett.add(marks)
            res.push(marks)
        }
    }
}

console.log(res)