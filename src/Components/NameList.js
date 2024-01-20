import React from 'react'
import Person from './Person'


function NameList() {
    const Persons=[
        {
            name:'Creator',
            action:'knowledge of everyting and use it for welfare',
            rank:3
        },
        {
            name:'Preserver',
            action:'takes care and plans everything',
            rank:2
        },
        {  
            name:'Destroyer',
            action:'the ultimate and most powerful God ',
            rank:1
        }]
        
        const names=['Bruce','Steve','David','Steve']
        const nameList=names.map((name,index)=><h2 key={index}>{name}</h2>)
        // const personList=Persons.map(person=><Person key={person.rank} person={person}/>)
  return (
    <div>
    {/* {personList} */}
    {nameList} 
    </div>
  )
}

export default NameList
