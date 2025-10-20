//Remove duplicate elements from an array using filter.

let a =[1, 2, 31, 4, 5, 6,1,2,11, 14, 3,9,11,25,17]

let fil=a.filter((v,i,a)=>{
    return a.indexOf(v)===i
})
console.log(fil)