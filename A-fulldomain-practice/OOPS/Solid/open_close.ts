interface ServiceType{
    calculate(amount:number):number
}

class Student implements ServiceType{
    calculate(amount:number):number{
        return amount*0.5
    }
}

class Senior implements ServiceType{
    calculate(amount:number):number{
        return amount*0.3
    }
}

class Employee implements ServiceType{
    calculate(amount:number):number{
        return amount*0.25
    }
}

class DiscountService{
    getRes(type:ServiceType,amount:number):number{
        return type.calculate(amount)
    }
}

const d= new DiscountService()

console.log(d.getRes(new Employee(),1000))





