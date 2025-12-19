const user={name:'Nandu',age:25}

const proxyU = new Proxy(user,{
    get(tar,prop){
        console.log(`getting the property ${prop}`);
        return tar[prop]
    },
    set(tar,prop,val){
        console.log(`setting the prop ${prop} to ${val}`);
        tar[prop]=val
        return true
    }
})

console.log(user.name)


// console.log(proxyU.name);
// proxyU.name='ashika'

// console.log(proxyU.name); 