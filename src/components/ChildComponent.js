import React from 'react'

function ChildComponent(props) {
    return (
        <div> {/* passing method(greetHandler) as prop from parent to child component */}
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
