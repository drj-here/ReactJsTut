import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onMouseOver={incrementCount}> Hovered {count} times!</button>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
