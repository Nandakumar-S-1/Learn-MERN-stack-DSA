function isEmpty(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            return false
        }
    }
    return true
}
console.log(isEmpty({name:"ashika"}));
console.log(isEmpty({}));
