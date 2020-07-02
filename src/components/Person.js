import React from 'react'

function Person({person}) { //binding person as a props from NameList.js
    return (
        <div>
        <h2>I am {person.name}, I am {person.age}, & my skill is {person.skill}</h2>
        </div>
    )
}

export default Person
