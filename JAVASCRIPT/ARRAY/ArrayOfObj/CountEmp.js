// Recursively count all employees in departments
const company = {
  name: 'HQ',
  employees: 5,
  departments: [
    {
      name: 'Engineering',
      employees: 10,
      departments: [
        { name: 'Frontend', employees: 4, departments: [] },
        { name: 'Backend', employees: 6, departments: [] }
      ]
    },
    {
      name: 'Sales',
      employees: 8,
      departments: []
    }
  ]
};
// Expected Output: 33 (5 + 10 + 4 + 6 + 8)
// Write function: countEmployees(dept)




function countEmployees(arr){
    let count= arr.employees || 0 

    if(arr.departments && arr.departments.length >0){
        for(let i of arr.departments){
            count+= countEmployees(i)
        }
    }
    return count
}

console.log(countEmployees(company));












