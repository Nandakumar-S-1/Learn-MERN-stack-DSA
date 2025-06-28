let obj = {
    name:'Aswathy',
    age:22
}

let funct = function(n){
    console.log(n+ this.name);
}

funct.apply(obj,['my name is '])