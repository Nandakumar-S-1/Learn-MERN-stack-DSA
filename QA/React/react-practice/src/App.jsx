import React,{useState} from 'react'

function App() {
  const [num, setNum] = useState(0)

  function inc() {
      setNum(p=>p<5 ? p+1 : 5)
  }
  function dec() {
    setNum(p=>p>0 ? p-1 : 0)
  }
  return (
    <div>
      <h2>{num}</h2>
      <button  onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </div>
  )
}

export default App
