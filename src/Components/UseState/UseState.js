import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
    console.log('Redndering state')
  return (
    
    <div>
     <button onClick={()=>setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default UseState