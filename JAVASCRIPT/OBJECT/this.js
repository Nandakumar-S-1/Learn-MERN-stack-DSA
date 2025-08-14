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
