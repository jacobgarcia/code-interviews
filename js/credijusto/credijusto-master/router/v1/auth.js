/* eslint-env node */
const path = require('path')
const express = require('express')
const router = new express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors = require('cors')

const User = require(path.resolve('models/User'))
const config = require(path.resolve('config'))

router.route('/signup').post(async (req, res) => {
  const { name, surname, username, email, password, company } = req.body
  try {
    const isRegistered = await User.findOne({ email })
    if (isRegistered) return res
        .status(403)
        .json({ success: false, message: 'User already registered' })
    const cryptedPassword = await bcrypt.hash(`${password}${config.secret}`, 10)
    const user = await User({
      name,
      surname,
      username,
      email,
      password: cryptedPassword,
      company,
    }).save()

    const token = jwt.sign({ _id: user._id, email: user.email }, config.secret)

    return res.status(200).json({ token, user })
  } catch (error) {
    console.error('Failed to signup user', error)
    return res.status(500).json({ error: { message: 'Failed to signup user' } })
  }
})

router.route('/authenticate').post(async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }).lean()
    if (!user) {
      console.info('Failed to authenticate user email')
      return res.status(400).json({
        success: false,
        message: 'Authentication failed. Wrong user or password.',
      })
    }
    const isValid = await bcrypt.compare(
      `${password}${config.secret}`,
      user.password
    )
    const token = jwt.sign({ _id: user._id, email: user.email }, config.secret)
    const { _id, name, surname, username } = user
    if (isValid) return res.status(200).json({
        token,
        user: {
          _id,
          name,
          surname,
          username,
        },
      })
    return res.status(401).json({
      success: false,
      message: 'Authentication failed. Wrong user or password',
    })
  } catch (error) {
    console.error('Failed to authenticate user password', error)
    return res.status(500).json({
      success: false,
      error: { message: 'Failed to authenticate user password' },
    })
  }
})

router.options('*', cors())
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

router.use((req, res, next) => {
  const bearer = req.headers.authorization || 'Bearer '
  const token = bearer.split(' ')[1]

  if (!token) {
    return res
      .status(401)
      .send({ error: { message: 'No bearer token provided' } })
  }

  return jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      console.error('Failed to authenticate token', err, token)
      return res
        .status(401)
        .json({ error: { message: 'Failed to authenticate  bearer token' } })
    }

    req._user = decoded
    req._token = token
    return next()
  })
})

module.exports = router
