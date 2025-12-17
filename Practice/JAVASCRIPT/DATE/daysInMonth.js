const date=new Date()
let day=date.getDate()
let month=date.getMonth()
let year=date.getFullYear()

let count=new Date(year,month+1,0).getDate()
console.log(count);
