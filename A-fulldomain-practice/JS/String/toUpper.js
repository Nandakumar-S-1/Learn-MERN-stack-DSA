let str='hello'
function ToUpper(str){
    return str.split(' ').map(w=>w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}
console.log(ToUpper(str))
