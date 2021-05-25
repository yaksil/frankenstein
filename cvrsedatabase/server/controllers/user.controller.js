const genController = require('./gen.controller')
const { User } = require('../models/_index')

const relations = {
  getById: ['artisan_id'],
}

module.exports = {
  // function is not a function what the fuck
  ...genController(User, relations),
  // override functions here
}
