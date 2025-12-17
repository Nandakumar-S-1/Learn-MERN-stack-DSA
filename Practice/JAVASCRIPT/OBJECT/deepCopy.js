const obj = {
    name:'Ashika',
    age:22,
    address:{
        place:'kochi'
    }
}

let objCopy = JSON.parse(JSON.stringify(obj))

objCopy.name = 'Aswathy'
objCopy.address.place='Moovatupuzha'
console.log(obj.name)
console.log(obj.address.place);

// console.log(objCopy.name);
console.log(objCopy.address.place);
