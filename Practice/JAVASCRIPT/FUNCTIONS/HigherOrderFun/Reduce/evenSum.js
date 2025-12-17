let a =[1, 2, 31, 4, 5, 6, 14, 3,9,11,25,17]

let sum=a.reduce((acc,cur)=>{
    if(cur%2==0){
        return acc+cur
    }else{
       return acc
    }
},0)

console.log(sum)