const mongoose = require('mongoose')

const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
  fullname: {
    type: String,
    default: '',
  },
  artisan_id: {
    type: String,
    ref: 'Artisan',
  },
  //billing: {} // TODO billing model, check contacts on creating order
})

module.exports = mongoose.model('User', user, 'Users')
