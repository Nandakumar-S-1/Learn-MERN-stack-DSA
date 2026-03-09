import React from 'react'
import Provider from './UseContext/One/Provider'
import Child1 from './UseContext/One/Child1'
import Child2 from './UseContext/One/Child2'
import CounterReducer from './UseReducer/CounterReducer'
import Parent from './DataTransfer/ToChild/Parent'
import Stopwatch from './UseEffect/Stopwatch'
import UseMemo from './UseMemo/UseMemo'
import Fetch from './Others/Fetch'
import FetchProducts from './Others/FetchProducts'
import UsingUseFetch from './Others/UsingUseFetch'
import Shop from './Others/SHOPCART/Shop'

function App() {
  return (

    <>
    <Shop/>
    {/* <UsingUseFetch/> */}
    {/* <Fetch/> */}
    {/* <FetchProducts/> */}
    {/* <UseMemo/> */}
    {/* <Stopwatch/> */}
    {/* <Parent/> */}
    {/* <CounterReducer/> */}
    </>















    // <div>
    //   <Provider>
    //     <Child1/>
    //     <Child2/>
    //   </Provider>
    // </div>
  )
}

export default App
