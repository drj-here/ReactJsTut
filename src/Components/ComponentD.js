import React, { Component } from 'react'
import ComponentF from './ComponentF';

class ComponentD extends Component {
  render() {
    return <ComponentF/>
    // make sure you return the child component in the same line of return otherwise Js won't be able to recognise it and treat it as undefined
  }
}

export default ComponentD
