function RemoveChar(str,char){
    let resStr=''
    for(let i=0;i<str.length;i++){
        if(str[i]!==char){
            resStr+=str[i]
        }
    }
    return resStr
}
console.log(RemoveChar("ashika","a"));
