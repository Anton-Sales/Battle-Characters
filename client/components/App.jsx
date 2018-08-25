import React from 'react'

import Characters from './Characters'
import LoadWarrior from './LoadWarrior'
import LoadRouge from './LoadRouge'
import LoadMage from './LoadMage'
import LoadHuman from './LoadHuman'


class App extends React.Component {

    render(){
        return(
            <div>
                <h1>Characters</h1>
                <Characters />
                <LoadWarrior />
                <LoadRouge />
                <LoadMage />
                <LoadHuman />
            </div>
        )
    }
}

export default App