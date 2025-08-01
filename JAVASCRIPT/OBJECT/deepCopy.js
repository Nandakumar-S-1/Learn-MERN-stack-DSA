const obj = {
    name:'Ashika',
    age:22
}

let objCopy = JSON.parse(JSON.stringify(obj))

objCopy.name = 'Aswathy'
console.log(obj.name)
console.log(objCopy.name);
