import React from 'react'

import Users from './Users'
import LoadWarrior from './LoadWarrior'

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>Characters</h1>
                <Users />
                <LoadWarrior />
            </div>
        )
    }
}

export default App