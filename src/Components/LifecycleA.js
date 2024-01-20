import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    console.log('Constructor LifecycleA')
  }

  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps lifecycleA');
    return null;
  }

  componentDidMount(){
     console.log('componentDidMount lifecycleA');
  }
  
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate lifecycleA');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate lifecycleA');
    return null;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate lifecycleA');
  }

  changeState=()=>{
    this.setState({
      name:'drj'
    })
  }
  render() {
    console.log('render lifecycleA');
    return (
      <div>
         <div>LifecycleA</div>
         <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
       
      </div>
    )
  }
}

export default LifecycleA
