function NestedFreeze(obj){
    Object.freeze(obj)
    for(let key in obj){
        if(obj.hasOwnProperty(key) && typeof obj[key]==="object" && obj[key]!==null){
            NestedFreeze(obj[key])
        }
    }
    return obj
}

let details = {
    name:"ashika",
    address:{
        place:"moovatupuzha"
    }
}
let frozen=NestedFreeze(details)
console.log(details);
frozen.name="aswathy"

console.log(frozen);
//wont work because its frozen since it became immutable