function reverse(str){
    let s=[]
    for(let i=0;i<str.length;i++){
        s.push(str[i])
    }
    let res=''
    while(s.length)res+=s.pop()
    return res
}
console.log(reverse('name'))