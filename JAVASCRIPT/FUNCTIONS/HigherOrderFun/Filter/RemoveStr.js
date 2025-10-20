// Return words longer than 3 characters from an array.

let str=["kiwi",'mango','banana',"apple",'strawberry','pineapple','orange']
console.log(str)
for(let i=0;i<str.length;i++){
    let word=str[i]
    if(word.length<=5){
        str.splice(i,1)
    }
}

console.log(str)

for(let i=str.length-1;i>=0;i--){
    let word=str[i]
    if(word.length<=5){
        str.splice(i,1)
    }
}

console.log(str)