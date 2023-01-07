const jwt = require('jsonwebtoken')

function protect(req, res, next) {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(401).json({ error: 'Acceso denegado' })
    }

    jwt.verify(token, process.env.SECRET_KEY)

    next()
  } catch (error) {
    return res.status(400).json({ error: 'Token no valido' })
  }
}

module.exports = protect
