import React from 'react'

import Users from './Users'
import LoadWarrior from './LoadWarrior'
import LoadRouge from './LoadRouge'
import LoadMage from './LoadMage'
import LoadHuman from './LoadHuman'


class App extends React.Component {

    render(){
        return(
            <div>
                <h1>Characters</h1>
                <Users />
                <LoadWarrior />
                <LoadRouge />
                <LoadMage />
                <LoadHuman />
            </div>
        )
    }
}

export default App