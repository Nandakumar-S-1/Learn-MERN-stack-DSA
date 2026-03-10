import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [sec,setSec]=useState(0)
    const [isRunning,setIsRunning]=useState(false)

    useEffect(()=>{
        if(!isRunning){
            return
        }
        const int = setInterval(()=>{
            setSec(s=>s+1)
        },1000)

        return ()=>clearInterval(int)
    },[isRunning])
  return (
    <div>
      <h2>{sec}</h2>
      <button onClick={()=>setIsRunning(true)}>start</button>
      <button onClick={()=>setIsRunning(false)}>stop</button>
      <button onClick={()=>{setIsRunning(false),setSec(0)}}>reset</button>
    </div>
  )
}

export default Stopwatch
