// class components
import React,{Component} from "react";

class Welcome extends Component{
    render(){
        // this is destructuring 
        const {name,nickName}=this.props
        return <h1>Good Morning {name} a.k.a {nickName}</h1>
    }
}
export default Welcome;