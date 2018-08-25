import request from 'superagent'

import { receiveCharacters } from '../actions/characters'

export function getCharacters() {
    return dispatch => {
        request
            .get('/api/characters')
            .then(res => {
                console.log(res.body)
                dispatch(receiveCharacters(res.body))
            })
    }
}