import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        {/* binding this keyword in the constructor as binding event handler in react */}
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){

    {/*     regular concatination expression below
        alert('Hello' + this.state.parentName) */}

        {/* the above expression is regular, but in ES6 template literals have new syntax below*/}
        alert(`Hello ${this.state.parentName}`)
    }
    

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
