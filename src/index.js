const app = require('./server')
const { PORT } = require('./constants')
const { sequelize } = require('./database')
const User = require('./users/models/user.model')
const Task = require('./tasks/models/task.model')
const ConfigServer = require('./server/config_server')

const tables = [User, Task]

const configServer = new ConfigServer(app, PORT, sequelize)

configServer.syncTables(tables)
configServer.start()
