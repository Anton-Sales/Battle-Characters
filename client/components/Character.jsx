import React, { Component, Fragment } from 'react'

import { characters } from '../../characters.json'

class Character extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
        this.loadCharacters = this.loadCharacters.bind(this)
    }

    loadCharacters(e) {
        e.preventDefault()
        this.setState({ characters: characters })
        console.log(this.state.characters)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.loadCharacters(e)}>
                    <input type="submit" value="Load Characters" />
                </form>
                <ul>
                    {this.state.characters.map((data, index) => {
                        return <li key={index}>
                            {data.name}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Character





