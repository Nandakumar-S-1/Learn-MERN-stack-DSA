class Car{
    #engine
    constructor(brand){
        this.brand=brand
        this.#engine = 'v8'
    }
    setEng(){
        this.#engine='v12'
        console.log('engine updated')        
    }
}
let c= new Car()
c.setEng('v6')

// c.#engine