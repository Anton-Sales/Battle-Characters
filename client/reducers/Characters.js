export default function (state = [], action) {
    console.log(action)
    switch (action.type) {
        case 'RECEIVE_CHARACTERS':
            return action.characters
        default:
            return state
    }
}