//Pass by reference-

let obj = {name: 'jhon'}

function modifyObj(o){
    o.name = 'jane'
}
modifyObj(obj)
console.log(obj.name);

//-Pass by value

let a=2
function nextFun(a){
    a=20
    return a
}
console.log(nextFun(a));

console.log(a);

