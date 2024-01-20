import React from 'react'

function Person({person}) {
  return (
    <div>
       
            <h2>He is {person.name}. He is known for {person.action}. Favorite god {person.rank} for me</h2>
        
    </div>
  )
}

export default Person
