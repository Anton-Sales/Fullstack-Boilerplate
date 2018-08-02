const express = require('express')
const server = express()

const humanRouter = require('./routes/humans')

server.use('/api/humans', humanRouter)


module.exports = server