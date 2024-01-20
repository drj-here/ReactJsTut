import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        // without this.setState ,the UI won't render the changes though it can be changed in console
        // setState accepts an object
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log('Callback value ', this.state.count)
        // }
        // //console from callback function
        // )
        // console.log(this.state.count)
        // the above console won't show the updated value as the call is syncrhonous

        // the above code is DON'T because the React performs all calls simultaneously and increment only by 1 in this case 
        this.setState(prevState=>(
            {
                count:prevState.count+1
            }),console.log(this.state.count))
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    
  render() {
    return (
      <div>
        <div>count- {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Inc</button>
        <button onClick={()=>this.decrement()}>Dec</button>
      </div>
    )
  }
}

export default Counter
