const User={
    fname:'Ashika',
    lname:'Sivan',
    
    get fullName() {
    return `${this.fname} ${this.lname}`;
  } ,
  set fullName(name){
    const [f,l]=name.split(' ')
    this.fname=f
    this.lname=l
  }
}

console.log(User.fullName)
User.fullName= 'nanda kumar'
console.log(User.fullName)
console.log(User.fname);
