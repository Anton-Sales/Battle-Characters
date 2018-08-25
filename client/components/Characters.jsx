import React from 'react'

import { connect } from 'react-redux'

import {getCharacters} from '../api/characters'

class characters extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getCharacters())
        console.log("give me some characters")
    }

    render() {
        const { characters } = this.props
        return (
            <div>
                {characters.map(user => <div>
                    <h1>{user.name}</h1>
                </div>)}
            </div>
        )
    }
}

// function mapStateToProps (state) {
//     return {
//         characters: state.characters
//     }
// }

const mapStateToProps = ({ characters }) => ({
    characters
})

export default connect(mapStateToProps)(characters)