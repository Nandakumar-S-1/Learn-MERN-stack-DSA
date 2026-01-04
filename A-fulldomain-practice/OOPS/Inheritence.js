class Vehicle {
  tyres(){
      console.log('vehicles have tyres')
  }
}

class V extends Vehicle{
    seats(){
        console.log('car has 5 seats')
    }
}

let v = new V();

v.tyres();
v.seats()