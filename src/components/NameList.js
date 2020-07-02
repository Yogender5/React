import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{
            id : 1,
            name: 'Bruce', 
            age: 30,
            skill: 'React Developer'},
            {
                id : 2,
                name: 'Clarck', 
                age: 29,
                skill: 'Angular Developer'

            },
            {
                id : 3,
                name: 'Diana', 
                age: 26,
                skill: 'Vue Developer'
            }
         ]
         //binding the person parameter in the map method as a props inside the <person />
         //The Key prop should be unique value for react to render the values in the list
    const personList = persons.map(person =>  <Person key={person.id} person = {person}/> ) 
    return (
        <div> {personList}
            {/* regular way of printing the list
            <h2>{names[0]}</h2> 
           <h2>{names[1]}</h2>
           <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
