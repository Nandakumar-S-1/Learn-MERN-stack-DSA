import React from 'react'

function Practice() {
  return (
    <div>
      
    </div>
  )
}

export default Practice





















// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// function Practice() {
//   const [t,setT]=useState(0)
//   useEffect(()=>{
//     let int=setInterval(()=>{
//       setT(s=>s+1)
//     },1000)
//     return ()=>clearInterval(int)
//   },[])
//   return (
//     <div>
//       {t}
//     </div>
//   )
// }

// export default Practice

/////////////////////////////////

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// function Practice() {
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then((res)=>res.json())
//     .then(d=>setData(d))
//   },[])
//   return (
//     <div>
//       {
//         data.map((i)=>(
//           <h2 key={i.id}>{i.title}</h2>
//         ))
//       }
//     </div>
//   )
// }

// export default Practice


// ////////////////////////////////////////////////
// import React, { useContext } from 'react'
// import { CounterContext } from './js'

// function Practice() {
//   const {num}=useContext(CounterContext)
//   return (
//     <div>
//       <h4>child 2</h4>
//       <h2>{num}</h2>
//     </div>
//   )
// }

// export default Practice

//////////////////////////////////


























