const car = {
    model:'Defender',
    color:'Black'
}

const carProxy = new Proxy(car,{
    get(tar,prop){
        console.log(`accessing property ${prop}`);
        return tar[prop]
    },
    set(tar,prop,val){
        console.log(`setting new value to ${prop} as ${val}`);
        tar[prop]=val
        return true
    }
})

console.log(carProxy);
console.log(carProxy.color);
carProxy.color='red'
console.log(carProxy.color);

