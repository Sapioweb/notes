var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.set('debug', true)

module.exports = mongoose.model('Notes', new Schema({
  title: String,
  description: String,
  content: String,
  slug: String,
  created_at: {
    type: Date,
    default: Date.now
  },
}))
