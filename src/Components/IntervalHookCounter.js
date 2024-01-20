import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0)

    const tick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
    const interval=setInterval(tick,1000)

    return ()=>{
        clearInterval(interval)
    }
    },[count]) //check empty dependency array
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter