class BankAccount{
    private balance =0
    deposit(amount:number){
        if(amount>0)this.balance+=amount
    }
    getBalance(){
        return this.balance
    }
}

let b = new BankAccount()
b.deposit(1000)
console.log(b.getBalance())