import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    console.log('Constructor LifecycleB')
  }

  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps lifecycleB');
    return null;
  }

  componentDidMount(){
     console.log('componentDidMount lifecycleB');
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate lifecycleB');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate lifecycleB');
    return null;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate lifecycleB');
  }
  
  render() {
    console.log('render lifecycleB');
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
