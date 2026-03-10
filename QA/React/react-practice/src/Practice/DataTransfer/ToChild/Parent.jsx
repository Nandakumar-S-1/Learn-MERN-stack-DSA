import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [val,setVal]=useState('')
    
  return (
    <div>
      <Child val={val}/>
      <h2>parent</h2>
      <input type="text" onChange={(e)=>setVal(e.target.value)} />
      <button onClick={()=>setVal(val)}>sent</button>  
    </div>
  )
}

export default Parent
