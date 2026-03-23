import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    let [num,setNum]=useState(0)
  return (
    <div>
        <h2>{num}</h2>
      <Child handle={setNum}/>
    </div>
  )
}

export default Parent
