const express = require('express')
const router = express.Router()

const usersDB = require('../db/users')

router.get('/', (req, res) => {
    usersDB.getUsers()
    .then(users => {
        res.json(users)
    })
})

router.post('/', (req, res) =>{
    const user = req.body
    usersDB.addUser(user)
        .then(user => {
            res.json(user) //id[0]
        })
})


module.exports = router