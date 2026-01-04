let str = 'my name is nandakumar'
let arr=str.split(' ').map(w=>w.slice(0,-1) + w.slice(-1).toUpperCase()).join(' ')

console.log(arr)