import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function Child1() {
  const {count} = useContext(CounterContext)
    return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default Child1
