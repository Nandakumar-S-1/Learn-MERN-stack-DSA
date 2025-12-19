const user = {
    name:'nandu'
}
const userPr = new Proxy(user,{
    get(tar,prop){
        if(tar[prop] !== undefined){
            return tar[prop]
        }else{
            return 'not available'
        }
    }
})

console.log(userPr.age)
