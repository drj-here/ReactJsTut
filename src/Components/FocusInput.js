import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef=React.createRef()
    }
    
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Input focus</button>
      </div>
    )
  }
}

export default FocusInput
