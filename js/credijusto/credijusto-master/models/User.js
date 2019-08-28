/* eslint-env node */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  name: String,
  surname: String,
  username: { type: String, required: true, unique: true, index: true },
  company: String,
  password: { type: String, required: true },
})

schema.virtual('fullname').get(() => {
  return `${this.name} ${this.surname}`
})

module.exports = mongoose.model('User', schema)
