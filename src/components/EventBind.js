import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        this.ClickHandler = this.ClickHandler.bind(this)
    }
    
    ClickHandler(props){
        this.setState({
            message: 'Goodbye'
        }) 
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1st approach binding the 'this' keyword */}
            {/*  <div><button onClick={this.ClickHandler.bind(this)}>click</button></div>   */ }  
                {/* 2nd approach using the arrow function */}            
            {/*  <div><button onClick={() => this.ClickHandler()}>click</button></div> */}
              {/* 3rd approach binding this keyword in the constructor class */} 
             <div><button onClick={this.ClickHandler}>click</button></div>
               </div>
        )
    }
}

export default EventBind
