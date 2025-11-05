
let count=0
let num=1
let sum=0
while(count<5){
    if((num*3)%2===0 ){
        sum+= num*3
        count++
    }
    num++
}

console.log(sum)