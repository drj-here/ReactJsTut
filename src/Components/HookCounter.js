import React,{useState} from 'react'

function HookCounter() {
    const [counter,setCounter]=useState(1)
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>count {counter}</button>
    </div>
  )
}

export default HookCounter
