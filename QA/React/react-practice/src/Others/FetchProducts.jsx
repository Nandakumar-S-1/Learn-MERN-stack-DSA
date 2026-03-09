import React, { useState } from 'react'

const FetchProducts = () => {
  const [proucts,setProducts]=useState([])
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setProducts(data))
  .catch(err=>console.log(err))
  return (
    <div>
      <ul>
        {
          proucts.map((p)=>(
            <li key={p.id}>
              {p.title}
            </li>
          ))
        }  
      </ul>      
    </div>
  )
}

export default FetchProducts
