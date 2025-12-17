function Reverse(str,index=0){
    if(str.length===index){
        return ''
    }
    return Reverse(str,index+1)+str[index]
}
console.log(Reverse('Nandu'));

/////////method 2/////////////////


function strRev(str,rev='',index=str.length-1){
    if(index<0){
        return rev
    }
    rev+=str[index]
    return strRev(str,rev,index-1)
}
console.log(strRev("ashika"))