// create linked list with cycle and check for cycle
const persons = [
  { id: 1, name: 'Akhil', dept: 'IT', salary: 45000, experience: 3 },
  { id: 2, name: 'Jenny', dept: 'HR', salary: 35000, experience: 2 },
  { id: 3, name: 'Varun', dept: 'IT', salary: 60000, experience: 5 },
  { id: 4, name: 'Sneha', dept: 'Finance', salary: 52000, experience: 4 },
  { id: 5, name: 'Ravi', dept: 'Sales', salary: 40000, experience: 3 },
  { id: 6, name: 'Anita', dept: 'HR', salary: 38000, experience: 2 },
  { id: 7, name: 'Karan', dept: 'IT', salary: 72000, experience: 6 },
  { id: 8, name: 'Lina', dept: 'Finance', salary: 48000, experience: 3 },
  { id: 9, name: 'Mohan', dept: 'Sales', salary: 45000, experience: 4 },
  { id: 10, name: 'Pooja', dept: 'IT', salary: 55000, experience: 4 },
]

// find the highest experience of each department 
// eg: { IT: 6, HR: 2, Finance: 4, Sales: 4 }

// const arr = [1, 2, 3, 2, 1]
//   check array is palindrome using recursion
const orderItems = [
    {
        id: 1,
        user: 'Rahul',
        items: [
            { name: 'Laptop', qty: 1, price: 50000 },
            { name: 'Mouse', qty: 1, price: 700 },
        ],
    },
    {
        id: 2,
        user: 'Vijay',
        items: [
            { name: 'Phone', qty: 1, price: 20000 },
            { name: 'Case', qty: 2, price: 200 },
        ],
    },
    {
        id: 3,
        user: 'Meera',
        items: [
            { name: 'Tablet', qty: 1, price: 15000 },
            { name: 'Cover', qty: 1, price: 500 },
        ],
    },
    {
        id: 4,
        user: 'Anita',
        items: [
            { name: 'Headphones', qty: 1, price: 3000 },
            { name: 'Charger', qty: 1, price: 800 },
        ],
    },
    { id: 5, user: 'Karan', items: null },
]

// node create a end point /total?id=1

// return total of that items (sum of qty * price) with proper error handling invalid_id , product not found

// 5. create counter using context and use reducer