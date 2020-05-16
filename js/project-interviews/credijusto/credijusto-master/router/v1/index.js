/* eslint-env node */
const path = require('path')
const express = require('express')
const router = new express.Router()

router.use(require(path.resolve('router/v1/scrapper')))
router.use(require(path.resolve('router/v1/auth')))
router.use(require(path.resolve('router/v1/users')))

router.use((req, res) => {
  return res.status(400).json({ message: 'No route' })
})

module.exports = router
