import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

// when pure component is used, there is no re-rendering as the values are same in both the cases i.e., 'Dishu'
// otherwise in case of regular component there is re-rendering 
class ParentComp extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Dishu'
      }
    }

    componentDidMount(){
        setInterval(()=>
        this.setState({name:'Dishu'}),2000)
    }
    
  render() {
    console.log('********Parent Component**********')
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
