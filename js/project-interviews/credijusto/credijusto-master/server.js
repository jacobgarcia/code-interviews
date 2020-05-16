/* eslint-env node */
const path = require('path')
const express = require('express')
const helmet = require('helmet') // Basic headers protection
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const hpp = require('hpp')
const client = require('redis').createClient()

const { databaseUri } = require(path.resolve('config')) // Configuration variables
const v1 = require(path.resolve('router/v1')) // API router location

const mode = process.env.NODE_ENV
const isProduction = mode === 'production'

dotenv.config({
  path: path.resolve(`config/.env${isProduction ? '.production' : '.development'}`),
})

const { PORT = 8080, SERVER_ONLY = false } = process.env

/* Connecting to Database */

mongoose
  .connect(
    databaseUri,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(() => {
    console.error('\n|\n|  Could not connect to DB\n|')
  })

const app = express()
const limiter = require('express-limiter')(app, client)

// Express Limiter middleware
limiter({
  path: '/v1/scrapper/data',
  method: 'get',
  lookup: 'headers.Authorization',
  // 10 requests per minute
  total: 10,
  expire: 1000 * 60
})

app.use(helmet())
app.use(hpp())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v1', v1)

if (!isProduction && !SERVER_ONLY) app.use(require(path.resolve('config/webpackDevServer')))
if (isProduction && !SERVER_ONLY) {
  app.use(express.static(path.resolve('dist')))
  app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')))
}

// Start server
app.listen(PORT, () =>
  console.info(`Credijusto is now running\n
    Port: \t\t${PORT}
    Server only: \t${SERVER_ONLY}
    Mode: \t\t${mode}`)
)
