import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    } 
    
    render() {

        {/* //approach 4, if LHS is true then only the right hand side will execute.
       return this.state.isLoggedIn && <div>Welcome Yogi</div> */}

        //approach 3(recommended) ternary operator works inside the JSX, unlike the approach 1&2 
        return(
            this.state.isLoggedIn ?
            <div>Welcome Yogi</div> :
            <div>Welcome guest</div>
        ) 

        {/* // approach 2, element variable 
        let message // defining a variable to hold the element in the variable 
        if (this.state.isLoggedIn){
             message = <div>Welcome Yogi</div>
        } else{
            message = <div>Welcome guest</div>
        }
        // return the variable that hold the element values 
        return <div>{message}</div>;  */} 

        {/* approach 1, regular if else condition */}
        {/* if(this.state.isLoggedIn){
            return <div>Welcome Yogi</div>
        } else{
            return <div>Welcome Guest</div>
        } */}
    
        return (
            <div>
               {/* <div>Welcome Yogi</div> 
               <div>Welcome guest</div> */}
            </div>
        )
    }
}

export default UserGreeting
