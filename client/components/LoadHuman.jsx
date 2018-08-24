import React, { Component, Fragment } from 'react'

import { characters } from '../../characters.json'

class LoadHuman extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.LoadHuman = this.LoadHuman.bind(this)
    }

    LoadHuman(e) {
        e.preventDefault()
        this.setState({ human: characters.human })
        console.log(this.state.human)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.LoadHuman(e)}>
                    <input type="submit" value="Load human" />
                </form>
                {this.state.human &&
                    <p> Character: {this.state.human.name}</p>}
                {this.state.human &&
                    <p> Health: {this.state.human.health}</p>}
                {this.state.human &&
                    <p> Damage: {this.state.human.attack}</p>}
            </div>
        )
    }
}

export default LoadHuman