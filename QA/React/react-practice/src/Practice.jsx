import React from 'react'

const fruits = ['mango','kiwi','banana']
function Practice() {

  return (
    <div>
      <ul>
        {
          fruits.map((f,i)=>(
             <li key={i}>{f}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Practice
