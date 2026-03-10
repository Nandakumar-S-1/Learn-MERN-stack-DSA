const users = [
  { "id": 1, "title": "Apple iPhone 14", "price": 799 },
  { "id": 2, "title": "Samsung Galaxy S23", "price": 699 },
  { "id": 3, "title": "Google Pixel 7", "price": 599 },
  { "id": 4, "title": "OnePlus 11", "price": 499 }
]

import React from 'react'

function Fetch() {
  return (
    <div>
        <ul>
            {users.map((u)=>
            <li key={u.id}>{u.title}</li>
            )}
        </ul>
      
    </div>
  )
}

export default Fetch
