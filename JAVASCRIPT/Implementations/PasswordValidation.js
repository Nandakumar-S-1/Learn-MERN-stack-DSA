function isValid(pass){
    const len=pass.length>=6
    const Capital=/[A-Z]/.test(pass)
    const Small=/[a-z]/.test(pass)
    const number=/\d/.test(pass)
    return  len&&number&&Capital&&Small
}
console.log(isValid('nandu@123'))