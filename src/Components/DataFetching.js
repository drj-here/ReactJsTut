import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(0)

    const handleClick=()=>{
        setIdFromButtonClick(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick]) //here id is the dependency . if empty array is passed, title won't render
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        {post.title}
        <button type='button' onClick={handleClick}>Fetch Post</button>
      {/* <ul>
        {
            post.map(post=>(<li key={post.id}>{post.title}</li>))
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
