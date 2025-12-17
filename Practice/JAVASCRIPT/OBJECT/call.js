let obj={
    name:'Ashika'
}
let obj2={
    name:'Sivan'
}
function named(a){
    console.log(a+this.name);
}

named.call(obj,"hello " )