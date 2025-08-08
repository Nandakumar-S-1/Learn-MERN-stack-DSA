function Largest(obj){
    return Math.max(...Object.values(obj))
}
console.log(Largest({a:1,b:4,c:8}));
