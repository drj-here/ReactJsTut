import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
function DataFetchingusingReducer() {
    const initialState={
        loading:true,
        post:'',
        error:''
    }

    const reducer=(state,action)=>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading:false,
                    post:action.payload,
                    error:''
                }
            case 'FETCH_ERROR':
                return {
                    loading:false,
                    post:'',
                    error:'something went wrong!'
                }
        }
    }

    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response=>{
            dispatch({type:'FETCH_SUCCESS',payload:Response.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
      {state.loading?'loading':state.post.title}
      {state.error?state.error:null}
    </div>
  )
}

export default DataFetchingusingReducer
