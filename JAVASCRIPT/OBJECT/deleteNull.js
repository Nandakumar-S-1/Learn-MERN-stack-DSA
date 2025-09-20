let obj = {
  name: "Nandu",
  age: null,
  city: "alappy",
  country: null
};

for(let i in obj){
    if(obj[i]===null){
        delete obj[i]
    }
}
console.log(obj)