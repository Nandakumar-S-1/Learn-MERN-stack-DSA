import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount]=useState(0)
    const [inp,setInp]=useState('')

    const square = useMemo(()=>{
        console.log('computing...')
        return count*count        
    },[count])
  return (
    <>
      <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>sq</button>
        <h2>{square}</h2>
    </>
  )
}

export default UseMemo
