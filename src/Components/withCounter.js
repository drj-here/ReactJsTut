import React from "react";

// this is HOC
const withCounter=WrappedComponent=>{
    class WithCounter extends React.Component{
        // this is the importance of HOC... the common functionality is shared
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          incrementCount=()=>{
              this.setState(prevState=>{
                  return {count:prevState.count+1}
              })
          }
        render(){
            return
             <WrappedComponent 
             count={this.state.count} 
             incrementCount={this.incrementCount}
             {...this.props}
             />
        }
    }
    return WithCounter
}

export default withCounter