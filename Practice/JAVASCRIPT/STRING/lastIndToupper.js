let str='my name is nandu'
let arr=str.split(' ')
for(let i=0;i<arr.length;i++){
    let word=arr[i]
    if(word.length>0){
        let ind = word.length-1
        let res= word.slice(0,ind) + word[word.length-1].toUpperCase()
        arr[i]=res
    }
}
let ans= arr.join(' ')
console.log(ans)