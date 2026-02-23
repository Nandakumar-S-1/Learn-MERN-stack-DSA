class Animal{
    hunger:number;
    health:number

    eat(){
        console.log(`i can eat`)        
    }
    sleep(){
        console.log('i can sleep')        
    }
}

// class Dog extends Animal{
//     eat(): void {
//          console.log('i can eat meat')        
//     }
// }

// let dog=new Dog()
// dog.health=10
// dog.eat()

class Cat extends Animal{
    sleep(): void {
        console.log('i will sleep all day')
        super.sleep()
    }
}
let cat = new Cat()
cat.sleep()