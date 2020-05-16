/* eslint-env node */
const path = require('path')

const jwt = require('jsonwebtoken')
const config = require(path.resolve('config'))

module.exports = {
  isAuthenticated: function(req, res, next) {
    const bearer = req.headers.authorization || 'Bearer '
    const token = bearer.split(' ')[1]

    if (!token) {
      return res.status(401).send({ error: { message: 'No bearer token provided' } })
    }

    return jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        console.error('Failed to authenticate token', err, token)
        return res.status(401).json({ error: { message: 'Failed to authenticate  bearer token' } })
      }

      req._user = decoded
      req._token = token
      return next()
    })
  },
}
