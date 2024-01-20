import React, { useState } from 'react'

const initState={
    fname:'Bruce',
    lname:'Wayne',
}

export const ObjectUseStaterender = () => {
    const [person,setPerson]=useState(initState)
    
    const changeName=()=>{
        // person.fname='Tony'
        // person.lname='Stark'
        // setPerson(person)
        //the above won't cause re-rendering because the reference doesn't change itself

        // instead do this
        const newPerson={...person}
            newPerson.fname='Tony'
            newPerson.lname='Stark'
            setPerson(newPerson)
        
    }

    console.log('object useState rendering')

  return (
    <div>
        <button onClick={changeName}> {person.fname} {person.lname}</button>
       </div>
  )
}
