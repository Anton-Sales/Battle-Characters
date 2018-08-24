import React, { Component, Fragment } from 'react'

import { characters } from '../../characters.json'

class LoadWarrior extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.loadWarrior = this.loadWarrior.bind(this)
    }

    loadWarrior(e) {
        e.preventDefault()
        this.setState({ warrior: characters.warrior })
        console.log(this.state.warrior)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.loadWarrior(e)}>
                    <input type="submit" value="Load Warrior" />
                </form>
                {this.state.warrior &&
                    <p> character: {this.state.warrior.name}</p>}
            </div>
        )
    }
}

export default LoadWarrior

    // < ul >
    // {
    //     this.state.characters.map((data, index) => {
    //         return (<li key={index}>
    //             {data.warrior}
    //         </li>)
    //     })
    // }
    //             </ul >





