const conn = require('./connection')


function getUsers() {
    return conn('users') // select all users
}

function addUser(user) {
    return conn('users')
        .insert(user)
}



module.exports = {
    getUsers,
    addUser
}