const original = { 
  name: "Alice", 
  address: { city: "NY", zip: 10001 } 
};


const deep=JSON.parse(JSON.stringify(original))
deep.name='bob'
deep.address.city='LA'
console.log("original",original)
console.log("deep",deep)



