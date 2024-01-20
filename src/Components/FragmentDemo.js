import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
         {/* we use this instead of div tag as it adds element in DOM */}
      <h1>Fragment Demo</h1>
      <p>This describes the fragment demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo
