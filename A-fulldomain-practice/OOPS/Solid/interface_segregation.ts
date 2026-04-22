interface Pay{
    pays(amount:number):void
}

interface Refundable{
    refund(amount:number):void
}

class Credit implements Pay,Refundable{
    pays(amount: number): void {
        
    }
    refund(amount: number): void {
        
    }
}

class UPI implements Pay{
    pays(amount: number): void {
        
    }
}