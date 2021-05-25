const genController = require('./gen.controller')
const { Order } = require('../models/_index')

const relations = {
  getById: ['item', 'user_id'],
}

module.exports = {
  // function is not a function what the fuck
  ...genController(Order, relations),
  // override functions here
}
