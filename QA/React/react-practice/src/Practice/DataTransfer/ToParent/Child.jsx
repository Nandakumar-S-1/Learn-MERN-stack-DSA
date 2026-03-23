import React from 'react'

function Child({handle}) {
  return (
    <div>
      <button onClick={()=>handle(9)}>click</button>
    </div>
  )
}

export default Child
