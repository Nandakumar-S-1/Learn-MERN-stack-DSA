import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
        let inter = setInterval(()=>{
            setTimer(p=>p+1)
        },1000)
        return () => clearInterval(inter)
    },[])
  return (
    <div>
      {timer}
    </div>
  )
}

export default Timer
