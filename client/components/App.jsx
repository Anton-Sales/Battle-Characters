import React from 'react'

import Users from './Users'
import Character from './Character'

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>Characters</h1>
                <Users />
                <Character />
            </div>
        )
    }
}

export default App