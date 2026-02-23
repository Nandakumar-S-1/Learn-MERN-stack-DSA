class Player{
    private speed:number;
    private health:number;

    setHealth(h:number){
        if(h<0){
            console.log('cannot set health below 0')            
            return 
        }
        this.health=h
    }
    setSpeed(s:number){
        this.speed=s
    }
    getHealth(){
        return this.health
    }
    getSpeed(){
        return this.speed
    }
}

let nandu = new Player()
nandu.setHealth(-9)
nandu.setHealth(2)
nandu.setSpeed(1)

console.log(`the health of nandu is ${nandu.getHealth()} and his speed is ${nandu.getSpeed()}`)