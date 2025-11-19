const double = (x) => x*2 // function finds double
const plus3 = (x) => x+3 // function adds 3

const result = (x) => double(plus3(x)) //here first it adds 3 then finds its double since plus3 function is added into the double function

console.log(result(5))