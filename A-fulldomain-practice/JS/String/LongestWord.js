str='hello my name is nandakumar'
function longest(str){
    let words=str.split(' ')
    let long=''
    for(let i of words){
        if(i.length>long.length) long=i
    }
    return long
}
console.log(longest(str))