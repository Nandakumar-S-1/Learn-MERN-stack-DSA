import React, { useEffect, useState } from 'react'

function Shop() {
    const [page,setPage]=useState('shop')
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const addToCart = (p) =>setCart([...cart,p])

  return (
    <div>
        <button onClick={()=>setPage('shop')}>shop</button>
        <button onClick={()=>setPage('cart')}>cart ({cart.length})</button>

    {
        page==='shop'&& products.map(p=>(
            <div key={p.id}>
                {p.title},{p.price}
                <button onClick={()=>addToCart(p)}>add to cart</button>
            </div>
        ))
    }
    {
        page==='cart' && cart.map((p,i)=>(
            <div key={i}>
                {p.title},{p.price}
            </div>
        ))
    }

    </div>
  )
}

export default Shop
