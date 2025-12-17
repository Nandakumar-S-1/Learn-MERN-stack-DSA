const original = { 
  name: "Alice", 
  address: { city: "NY", zip: 10001 } 
};

const shallow = {...original}

shallow.name='bob'
shallow.address.city="LA"

console.log("original",original)
console.log("shallow",shallow)

