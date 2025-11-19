let str='hello im nandakumar'
let words=str.split(' ')
let res=[]
for(let i=0;i<words.length;i++){
    let word=words[i]
    if(word.length>0){
        let cap=word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()
        res.push(cap)
    }
}

console.log(res.join(' '))