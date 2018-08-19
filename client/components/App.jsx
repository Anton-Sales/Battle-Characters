import React from 'react'

import Users from './Users'

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>Hello user</h1>
                <Users />
            </div>
        )
    }
}

export default App