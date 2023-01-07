const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const app = express()
const routers = require('../routers')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())
app.use(morgan('combined'))

app.use('/api', routers)

module.exports = app
