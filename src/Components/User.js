import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(0)}
      </div>
    )
  }
}

export default User
