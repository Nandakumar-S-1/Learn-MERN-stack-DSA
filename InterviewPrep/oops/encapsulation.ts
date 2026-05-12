class BankAccount{
    private _bal:number
    constructor(balance:number){
        this._bal=balance
    }
    deposit(amount:number):void{
        this._bal+=amount
    }
    getBalance(){
        return this._bal
    }
}

let ac=new BankAccount(100)
ac.deposit(25)
console.log(ac.getBalance())