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


let res={}

for(let p of persons){
    if(!res[p.dept] || res[p.experience]>=p.experience){
        res[p.dept]=p.experience
    }
}
console.log(res)