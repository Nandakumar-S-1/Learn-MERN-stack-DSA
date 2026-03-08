import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function Child2() {
    const {setCount}=useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>+</button>
      <button onClick={()=>setCount(c=>c-1)}>-</button>
    </div>
  )
}

export default Child2
