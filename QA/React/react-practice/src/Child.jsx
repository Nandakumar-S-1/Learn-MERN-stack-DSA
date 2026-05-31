import React from 'react'

function Child({getName}) {

  return (
    <div>
      <button onClick={()=>getName('hello')}>sent</button>
      <h2>child component</h2>
    </div>
  )
}

export default Child
