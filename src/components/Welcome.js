import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        const{name, heroName} = this.props // destructioring props in a variable for better code redability
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome