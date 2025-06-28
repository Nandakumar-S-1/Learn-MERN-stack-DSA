function Sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(Sum(1)(2)(3));

