function Reverse(str,index=0){
    if(str.length===index){
        return ''
    }
    return Reverse(str,index+1)+str[index]
}
console.log(Reverse('Nandu'));
