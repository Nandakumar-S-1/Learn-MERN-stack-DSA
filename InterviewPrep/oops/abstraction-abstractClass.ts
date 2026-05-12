abstract class Vehicle{
    abstract start():void
    stop():void{
        console.log('vehicle stopped')
    }
}

class Car extends Vehicle{
    start():void{
        console.log('car started')
    }
}

const car=new Car()
car.start()
car.stop()