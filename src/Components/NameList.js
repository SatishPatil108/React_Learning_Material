import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id : 1,
            name : 'Anvit',
            age : 30,
            Skill : 'React'
        },
    
        {
            id : 2,
            name : 'Swara',
            age : 30,
            Skill : 'Angular'
        },

        {
            id : 3,
            name : 'Viransh',
            age : 30,
            Skill : 'Vuejs'
        }
    
    ]

    
    const personList = persons.map(person => <Person key = {person.id} person={person}/>) 
    return <div>{personList}</div>
  
}

export default NameList