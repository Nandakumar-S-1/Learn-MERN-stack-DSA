import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [value,setValue]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setValue(data))
        .catch(err=>console.log(err))
    },[url])
  return value
}

export default useFetch

