import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(p=>p+1)}>+</button>
      <button onClick={()=>setCount(0)}>0</button>
      <button onClick={()=>setCount(p=>p-1)}>-</button>
    </div>
  )
}

export default Counter
