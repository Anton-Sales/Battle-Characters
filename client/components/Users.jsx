import React from 'react'

import { connect } from 'react-redux'

import {getUsers} from '../api/users'

class Users extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getUsers())
        console.log("give me some users")
    }

    render() {
        const { users } = this.props
        return (
            <div>
                {users.map(user => <div>
                    <h1>{user.name}</h1>
                </div>)}
            </div>
        )
    }
}

// function mapStateToProps (state) {
//     return {
//         users: state.users
//     }
// }

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps)(Users)