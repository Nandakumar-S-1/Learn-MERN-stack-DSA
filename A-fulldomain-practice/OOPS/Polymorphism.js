class Vehicle {
  tyres(){
      console.log('vehicles have tyres')
  }
}

class Car extends Vehicle{
    tyres(){
        console.log('car has 4 tyres')
    }
}
let c = new Car()
c.tyres()

let v = new Vehicle();
v.tyres();