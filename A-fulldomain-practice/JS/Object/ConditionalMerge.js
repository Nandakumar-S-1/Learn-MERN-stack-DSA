const base = { name: "Nandu" };
const extra = { age: 20 };

let cond=false

let res={
    ...base,...(cond ? extra : {}) 
}
console.log(res)