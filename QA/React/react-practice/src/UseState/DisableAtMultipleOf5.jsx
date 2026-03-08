import React, { useState } from 'react'

function DisableAtMultipleOf5() {
    const [count,setCount]=useState(0)
    function increment(){
        const v = count+1
        if(v%5===0){
            alert(`count ${v} is multiple of 5`)
        }
                    setCount(v)
    }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment} disabled={count%5===0 && count!==0}>inc</button>
      <button onClick={increment}>add</button>
    </div>
  )
}

export default DisableAtMultipleOf5
