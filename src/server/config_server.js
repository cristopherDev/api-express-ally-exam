class ConfigServer {
  constructor(app, port, db) {
    this.app = app
    this.port = port
    this.db = db
  }

  syncTables(tables) {
    const totalTables = tables.length

    if (totalTables) {
      console.log(`Total tables to check and syncronize: ${totalTables}`)

      tables.forEach((table, index) => {
        setTimeout(() => {
          table.sync({ alter: true })
        }, index * 1000)
      })
    } else {
      console.log('No tables to check and syncronize')
    }
  }

  async start() {
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
  }
}

module.exports = ConfigServer
