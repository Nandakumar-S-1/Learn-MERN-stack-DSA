import React, { useEffect, useState } from 'react'

function FetchProducts() {
    const [product,setProduct]=useState([])
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
            setLoad(false)
        })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default FetchProducts
