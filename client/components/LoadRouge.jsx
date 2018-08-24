import React, { Component, Fragment } from 'react'

import { characters } from '../../characters.json'

class LoadRouge extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.loadRouge = this.loadRouge.bind(this)
    }

    loadRouge(e) {
        e.preventDefault()
        this.setState({ rouge: characters.rouge })
        console.log(this.state.rouge)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.loadRouge(e)}>
                    <input type="submit" value="Load Rouge" />
                </form>
                {this.state.rouge &&
                    <p> Character: {this.state.rouge.name}</p>}
                {this.state.rouge &&
                    <p> Health: {this.state.rouge.health}</p>}
                {this.state.rouge &&
                    <p> Damage: {this.state.rouge.attack}</p>}
            </div>
        )
    }
}

export default LoadRouge