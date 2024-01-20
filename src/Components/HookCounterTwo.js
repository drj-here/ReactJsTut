import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)

    const IncrementBy5=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
        count:{count}
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Inc</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Dec</button>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={IncrementBy5}>inc 5</button>
    </div>
  )
}

export default HookCounterTwo
