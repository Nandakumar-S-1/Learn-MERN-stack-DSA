function reverse(str){
    if(str.length<2)return str

    return reverse(str.slice(1))+str[0]
}
console.log(reverse('name'))