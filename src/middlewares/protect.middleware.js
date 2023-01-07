const jwt = require('jsonwebtoken')

function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ error: 'Acceso denegado' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY)

    next()
  } catch (error) {
    return res.status(400).json({ error: 'Token no valido' })
  }
}

module.exports = protect
