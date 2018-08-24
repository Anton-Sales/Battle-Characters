import React, { Component, Fragment } from 'react'

import { characters } from '../../characters.json'

class LoadMage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.LoadMage = this.LoadMage.bind(this)
    }

    LoadMage(e) {
        e.preventDefault()
        this.setState({ mage: characters.mage })
        console.log(this.state.mage)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.LoadMage(e)}>
                    <input type="submit" value="Load Mage" />
                </form>
                {this.state.mage &&
                    <p> Character: {this.state.mage.name}</p>}
                {this.state.mage &&
                    <p> Health: {this.state.mage.health}</p>}
                {this.state.mage &&
                    <p> Damage: {this.state.mage.attack}</p>}
            </div>
        )
    }
}

export default LoadMage