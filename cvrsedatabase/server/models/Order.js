const mongoose = require('mongoose')

const order = new mongoose.Schema({
  user_id: {
    type: String,
    ref: 'User',
  },
  namesake: {
    type: String,
  },
  // represents ........... wait a fucking moment
  // TODO archiving orders?
  // true as active order, false as inactive == completed as archived or cancelled
  // 'tis not even a feature yet
  state: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active',
  },

  // make it eh product refs for now
  // idk how it's gonna work anyways
  item: {
    type: String,
    ref: 'Product',
  },

  // shipping info b like
  shipping: {
    type: String,
  },

  //counted as whatever
  total: {
    type: String,
  },
})

module.exports = mongoose.model('Order', order, 'Orders')
