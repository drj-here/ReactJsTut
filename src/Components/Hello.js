import React from "react";

const Hello=()=>{
    // return (
    //     <div className='dummy'>
    //         <h1>Hello drj</h1>
    //     </div>
    // )
    // above was jsx
    // let's do it without jsx
    return React.createElement(
    'div'
    ,{id:"hello",className:"dummy"},
    React.createElement('h1',null,'Hello drj!')
    )
    //at least 3 parameters within the braces 

    // Now u can say that jsx is easy to write and looks like wow
}

export default Hello