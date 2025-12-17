let today=new Date()
let y=new Date(today)

y.setDate(today.getDate()-7)
console.log(y.toDateString())