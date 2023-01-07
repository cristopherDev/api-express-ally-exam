const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()
const routers = require('../routers')
const { accessUrl } = require('../constants')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", accessUrl)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    next()
})
app.use(helmet.hidePoweredBy())
app.use(compression())
app.use(morgan('combined'))

app.use('/api', routers)

module.exports = app
