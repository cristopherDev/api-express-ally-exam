function ConfigServer(app, port, db) {
  this.app = app
  this.port = port
  this.db = db
  this.tables = []
}

ConfigServer.prototype = {
  setTablesToSync: function (tables) {
    this.tables = tables
  },
  syncTables: function () {
    const totalTables = this.tables.length

    if (totalTables) {
      console.log(`Total tables to check and syncronize: ${totalTables}`)

      this.tables.forEach((table) => {
        table.sync({ alter: true })
      })
    } else {
      console.log('No tables to check and syncronize')
    }
  },
  start: async function () {
    try {
      await this.db.authenticate()
      console.log('Connection has been established successfully.')

      this.app.listen(this.port, () =>
        console.log('server start port: ', this.port)
      )
    } catch (error) {
      console.log(error.message)
      console.log('Server error...')
    }
  },
}

module.exports = ConfigServer
