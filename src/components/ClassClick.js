import React, { Component } from 'react'

 class ClassClick extends Component {

    Clicked(){
        console.log('Button Clicked')
    }
    
    render() {
        // call the method to bind click event in DOM elements by reference with thiskeyword
        return (
            <div>
               <button onClick={this.Clicked}>Click</button>
            </div>
        )
    }
}

export default ClassClick
