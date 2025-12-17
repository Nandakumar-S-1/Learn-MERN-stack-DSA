// Print Numbers from 1 to N

function Print(n,ind=1){
    if(ind===n){
        return n
    }
    console.log(ind)
    return Print(n,ind+1)
}
console.log(Print(8))