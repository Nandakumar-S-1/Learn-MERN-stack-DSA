import React, { useState } from 'react'
import { CounterContext } from './CounterContext'

function Provider({children}) {
    const [count,setCount]=useState(0)
  return (
    <CounterContext.Provider value={{count,setCount}}>
        {children}
    </CounterContext.Provider>
  )
}

export default Provider
