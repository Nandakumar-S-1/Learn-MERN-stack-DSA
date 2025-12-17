let date=new Date()
let tomorrow=new Date(date)

tomorrow.setDate(date.getDate()+1)
// console.log(tomorrow)

let day=tomorrow.getDate()
let month=tomorrow.getMonth()
let year=tomorrow.getFullYear()

console.log(`${day}-${month}-${year}`)