const express = require('express')
const server = express()

const path = require('path')
const pathToPublic = path.join(__dirname, '../public')
const usersRouter = require('./routes/users')

server.use(express.json())
server.use(express.static(pathToPublic))


server.use('/api/users', usersRouter)

module.exports = server