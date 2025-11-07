let arr=[3,6,1,0,9,5,0,8,6,0,6,7,4,8,1,1,7,4,0]

let car1 = {
  brand: "BMW",
  model: "M5",
  price: 120000
}

let car2 = {
  brand: "Audi",
  model: "RS7",
  price: 110000
}

function Details(tax,insurance){
  console.log(`${this.brand}'s ${this.model} will cost ${this.price + tax + insurance} `)
}

Details.call(car1,1000,100)
Details.apply(car2,[20000,500])

let nc=Details.bind(car1,50000,500)
nc()