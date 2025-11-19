const scores = { math: 50, sci: 40, eng: 60 };

let sum=0
for(let i in scores){
   sum+=scores[i]
}
console.log(sum)