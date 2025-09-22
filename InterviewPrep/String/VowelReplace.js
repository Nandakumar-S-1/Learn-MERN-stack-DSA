function string(str){
    let regex=/[aeiou]/i
    let newStr=''
    for(let i=0;i<str.length;i++){
        if(i>0 && regex.test(str[i]) && !regex.test(str[i-1])){
            newStr=newStr.slice(0,-1)+(i-1)
        }
            newStr+=str[i]
    }
    console.log(newStr)
}
string('ashika')