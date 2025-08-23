const obj = {
  a: this, 
  b: function() { console.log("b:", this); }, 
  c: () => { console.log("c:", this); }, 
  d: {
    e: function() { console.log("d.e:", this); }, 
    f: () => { console.log("d.f:", this); } 
  }
};
obj.a
obj.b();       
obj.c();       
obj.d.e();     
obj.d.f();     



const object = {
    a: this, //  in global scope
    b: () => {
        return this; // this in an arrow function
    },
    c: function() {
        return this; // this in a regular function
    },
    d: {
        e: function() {
            return this; // this in a nested object method
        }
    }
};

console.log(object.a);
console.log(object.b());
console.log(object.c());
console.log(object.d.e());