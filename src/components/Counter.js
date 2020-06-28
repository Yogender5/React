import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState({
            // setState is used to modify the exixting state to be rendered
        //     count :  this.state.count +1 

        // })

        this.setState((prevState) => ({
            // react combines all previous setState methods to one single setState
            //setState accepts exixting setState as a parameter inside the function
            count: prevState.count+1
        }))
        console.log(this.state.count)
}

    incrementToFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
            <div> count - {this.state.count} </div>
               <button onClick={() => this.incrementToFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
