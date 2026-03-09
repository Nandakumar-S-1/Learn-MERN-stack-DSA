let str='banana'
function remove(str,char,i=0){
    if(str.length===i)return ''
    let val=str[i]
    if(val===char){
        return remove(str,char,i+1)
    }else{
        return val+ remove(str,char,i+1)
    }
}
console.log(remove(str,'a'))



