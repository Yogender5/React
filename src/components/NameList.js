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
    const personList = persons.map(person => <Person  person = {person}/> ) 
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
