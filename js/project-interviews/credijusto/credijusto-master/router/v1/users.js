/* eslint-env node */
const path = require('path')
const express = require('express')
const router = new express.Router()
const client = require('redis').createClient()

const User = require(path.resolve('models/User'))

// READ all users information
router.route('/users').get(async (req, res) => {
  try {
    const users = await User.find({}).select(
      'username name surname company email'
    )
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).json({ error: { message: 'Could not fetch users' } })
  }
})

// UPDATE user
router.route('/users/:username').put(async (req, res) => {
  const { name, surname, company } = req.body
  const { username } = req.params
  if (!name || !surname || !company || !username) return res.status(400).json({ error: { message: 'Malformed request' } })
  try {
    const user = await User.findOneAndUpdate(
      { username },
      { $set: { name, surname, company } }
    )
    if (!user) return res
        .status(404)
        .json({ success: false, message: 'User specified not found' })
    return res.status(200).json({
      success: true,
      message: 'Successfully updated user information',
      user,
    })
  } catch (error) {
    console.error('Could not update user information', error)
    return res
      .status(500)
      .json({ error: { message: 'Could not update user information' } })
  }
})

// DELETE user
router.route('/users/:username').delete(async (req, res) => {
  const { username } = req.params
  try {
    await User.findOneAndDelete({ username })
    return res
      .status(200)
      .json({ success: true, message: 'Successfully deleted user' })
  } catch (error) {
    console.error('Could not delete user', error)
    return res.status(500).json({ error: { message: 'Could not delete user' } })
  }
})
module.exports = router
