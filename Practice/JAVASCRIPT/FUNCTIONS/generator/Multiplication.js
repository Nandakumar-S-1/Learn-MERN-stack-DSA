function* Multiplication(num,limit){
    for(let i=1;i<=limit;i++){
        yield `${num} * ${i} = ${num*i}`
    }
}
const table= Multiplication(5,10)
for(let i of table){
    console.log(i);
}