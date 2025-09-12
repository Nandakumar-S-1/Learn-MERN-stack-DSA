function RemoveProp(obj,prop){
    let res={}
    for(let i in obj){
        if(i !== prop && obj.hasOwnProperty(i)){
            res[i]=obj[i]
        }
    }
    return res
}

console.log(RemoveProp({name:"ashika",age:23,place:"moovattupuzha"},"age"));
