const obj = {
    name:'Ashika',
    age:22,
    place:{
        district:'Ernakulam'
    }
}

let shallow = {...obj}
shallow.place.district = 'Thrissur'
console.log(obj.place.district);

console.log(shallow.place.district);
