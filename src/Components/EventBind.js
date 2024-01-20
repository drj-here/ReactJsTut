import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

    //   this.clickHandler=this.clickHandler.bind(this) 
      // this is called binding in constructor and it is more preferrable than binding in render method... approach 3
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }

    clickHandler=()=>{
         this.setState({
            message:'Goodbye!'
         })
    }
    // the above is approach 4
    // as per react approach 3 and 4 are more preferrable
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  // one way */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> // 2nd way */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
