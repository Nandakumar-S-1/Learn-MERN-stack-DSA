const invoices = [
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

function Getres(invoices,id){
    let customer = invoices.filter(i=>i.customerId===id)

    if(customer.length ===0)return 'user not found'

    let items = []
    for(let i of customer){
        if(i.items){
            items.push(...i.items)
        }
    }
    if(items.length===0){
        return 'items not found'
    }
    return items
}

console.log(Getres(invoices,10))