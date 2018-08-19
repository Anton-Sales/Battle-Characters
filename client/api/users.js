import request from 'superagent'

import { receiveUsers } from '../actions/users'

export function getUsers() {
    return dispatch => {
        request
            .get('/api/users')
            .then(res => {
                console.log(res.body)
                dispatch(receiveUsers(res.body))
            })
    }
}