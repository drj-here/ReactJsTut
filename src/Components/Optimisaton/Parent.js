import React, { useState } from 'react'


export const Parent = ({child}) => {
    const [count,setCount]=useState(0)
    console.log('Parent rendering')
  return (
    <div>
        <button onClick={()=>setCount((count)=>count+1)}>count {count}</button>
        {child}
    </div>
  )
}
