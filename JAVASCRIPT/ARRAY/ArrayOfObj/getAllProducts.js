// Find all product names from nested categories using recursion
const categories = {
  name: 'Electronics',
  products: ['Laptop', 'Mouse'],
  subcategories: [
    {
      name: 'Mobile',
      products: ['iPhone', 'Samsung'],
      subcategories: [
        {
          name: 'Accessories',
          products: ['Charger', 'Case'],
          subcategories: []
        }
      ]
    },
    {
      name: 'Audio',
      products: ['Headphones', 'Speaker'],
      subcategories: []
    }
  ]
};
// Expected Output: ['Laptop', 'Mouse', 'iPhone', 'Samsung', 'Charger', 'Case', 'Headphones', 'Speaker']
function getAllProducts(categories){
    let res=[]
    if(categories.products){
        res=res.concat(categories.products)
    }
    if(categories.subcategories && categories.subcategories.length>0){
        for(let i of categories.subcategories){
            res=res.concat(getAllProducts(i))
        }
    }
    return res
}

console.log(getAllProducts(categories));

