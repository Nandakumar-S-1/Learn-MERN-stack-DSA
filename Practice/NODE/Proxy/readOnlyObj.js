const config = {
    PORT:3000,
    database:'Mongodb'
}

const conProxy = new Proxy(config,{
     set(tar,prop,val){
        //doesnt allow changeing the property
        console.log(`cannot modify the property ${prop}`);
        return false
     }
})

console.log(conProxy);
conProxy.PORT=4000

console.log(conProxy.PORT);