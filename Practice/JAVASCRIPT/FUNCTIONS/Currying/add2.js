function ADD(a){
    return function(b){
        return a+b
    }
}

console.log(ADD(3)(2));

