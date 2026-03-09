import React from 'react'
import useFetch from '../CustomHooks/useFetch'

function UsingUseFetch() {
    const products = useFetch('https://fakestoreapi.com/products')
  return (
    <div>
      <ul>
        {
            products.map(p=>(
                <li key={p.id}>{p.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UsingUseFetch
