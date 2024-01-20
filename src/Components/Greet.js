// Stateless function
import React from 'react'

// function Greet(){
//     return <h1>Hello Everyone! How u doin?</h1>
// }
// let's rewrite the above function with arrow function syntax

//(props)-> ({name,children}) is called destructuring of parameter
const Greet=({name,children})=>{
    // const {name,children}=props     // this is the second way of destructuring
    return (
        <div>
<h1>Hi {name}</h1>
{children}</div>
// we need to wrap these within a div tag otherwise error is countered i.e.,we can return only one html element
)
}
export default Greet;
// Go through named export once