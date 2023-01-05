const app = require('./server')
const { PORT } = require('./constants')
const { sequelize } = require('./database')
const User = require('./models/user.model')
const ConfigServer = require('./server/config_server')

const tables = [User]

const configServer = new ConfigServer(app, PORT, sequelize)

configServer.setTablesToSync(tables)
configServer.syncTables()
configServer.start()
