import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {

    // Circuit operator rendering

    return this.state.isLoggedIn && <div>Hello drj</div>

    // 2. ELement variable rendering
    // let message
    // if(this.state.isLoggedIn) {
    //     message=<div>Hello drj</div>
    // }
    // else {message=<div>Hello Guest</div>}
    // return message

    // 1. if-else rendering
    // if(this.state.isLoggedIn) return <div>Hello drj</div>
    // else return <div>Hello Guest</div>

    //3. Ternary rendering
    return this.state.isLoggedIn==true?<div>Hello drj</div>:<div>Hello Guest!</div>
  }
}

export default UserGreeting
