import React, { useReducer } from 'react'

const inital = 0
function countReducer(state,action){
    switch (action.type){
        case "inc": return state+1
        case "dec":return state-1
        case "reset":return inital
        default : return state
    }
}

function CounterReducer() {
    const [state,dispatch]=useReducer(countReducer,inital)
  return (
    <>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:'inc'})}>+</button>
        <button onClick={()=>dispatch({type:'reset'})}>0</button>
        <button onClick={()=>dispatch({type:'dec'})}>-</button>
    </>
  )
}

export default CounterReducer
