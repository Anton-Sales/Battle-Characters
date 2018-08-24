
const server =  require('./server')
const port = 3000

const beNice = require('terminal-sweetness')

server.listen(port,  () => {
    console.log(`Server is listening to port ${port}`)
    beNice()
})