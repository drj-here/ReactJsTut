import React,{useEffect,useState} from 'react'

function UseEff() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('useEff -updating doc title');
        document.title=`clicked ${count} times`
    },[count]) // this is condtionally rendered so that the execution is optimal
  return (
    <div>
      <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEff
