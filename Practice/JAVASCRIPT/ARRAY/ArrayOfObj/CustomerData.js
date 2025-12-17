

function Order(orders,c){
    let exist = orders.filter(a=>a.customerId===c)
    if(exist.length===0){
        return 'customer is not availabe'
    }
    let res=[]
    for(let ord of exist){
        if(!ord.items){
            return 'no orders are available'
        }
        res.push(...ord.items)
    }
    return res
}

const orders = [
  {
    id: 201,
    customerId: 10,
    total: 1500,
    status: 'paid',
    items: ['monitor', 'cable'],
  },
  {
    id: 202,
    customerId: 11,
    total: 2300,
    status: 'unpaid',
    items: ['laptop'],
  },
  {
    id: 203,
    customerId: 10,
    total: 600,
    status: 'paid',
    items: ['keyboard', 'mouse'],
  },
  {
    id: 204,
    customerId: 12,
    total: 800,
    status: 'cancelled',
    items: ['webcam'],
  },
  {
    id: 205,
    customerId: 15,
    total: 800,
    status: 'cancelled',
    items: null,
  },
];


console.log(Order(orders,10))










