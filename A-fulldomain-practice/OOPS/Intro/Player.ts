class Player{

    health:number | undefined //these two are instancces
    speed:number | undefined

    greet(){ //this is a method
        console.log('hello welcome')
    }
}

const mario = new Player()
mario.health=10
mario.speed=2
mario.greet()