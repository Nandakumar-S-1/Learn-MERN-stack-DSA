let obj={
    name:'Devan'
}
let obj2 ={
    name:'belwin'
}

let fn = function(a){
    console.log(a+this.name);
}

let res= fn.bind(obj,`hello I'm ` )
res()