import React, { useReducer } from 'react'
const initialState={
    firstCounter:0,
    secondCounter:10
}
// this is complex state
// state,action,count,initialState are objects here
const reducer=(state,action)=>{
    
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
            case 'increment2':
                return {...state,secondCounter:state.secondCounter+action.value}
            case 'decrement2':
                return {...state,secondCounter:state.secondCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerCounterTwo() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>First Count- {count.firstCounter}</div>
        <div>Second Count- {count.secondCounter}</div>
      <button onClick={()=>dispatch({type: 'increment',value:1})}>increment</button>
      <button onClick={()=>dispatch({type: 'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatch({type: 'increment2',value:1})}>increment2</button>
      <button onClick={()=>dispatch({type: 'decrement2',value:1})}>decrement2</button>
      <button onClick={()=>dispatch({type: 'increment',value:5})}>increment by 5</button>
      <button onClick={()=>dispatch({type: 'decrement',value:5})}>decrement by 5</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
    </div>
  )
}

export default ReducerCounterTwo
