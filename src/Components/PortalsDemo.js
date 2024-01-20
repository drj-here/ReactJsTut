import React from 'react'
import ReactDOM  from 'react-dom'

// this is to escape from the root component so that it doesn't fall under 'root' even though portal-root is taken in div tag
// this can be done using ReactDOM.createPortal()
function PortalsDemo() {
  return ReactDOM.createPortal(
    <h1>
      Portals Demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalsDemo
