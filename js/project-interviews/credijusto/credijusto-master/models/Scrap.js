const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExchangeRate = new Schema({
  value: Number,
  lastUpdated: Number,
})
const schema = new Schema({
  dof: { type: ExchangeRate, required: true },
  fixer: { type: ExchangeRate, required: true },
  bmx: { type: ExchangeRate, required: true },
})

module.exports = mongoose.model('Scrap', schema)
