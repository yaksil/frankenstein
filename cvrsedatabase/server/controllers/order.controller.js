const genController = require('./gen.controller')
const { Order } = require('../models/_index')
const boom = require('@hapi/boom')

const relations = {
  getById: ['item', 'user_id'],
}

module.exports = {
  // function is not a function what the fuck
  ...genController(Order, relations),
  // override functions here
  async getByArtisan(req, res) {
    try {
      const items = await Order.find({ artisan_id: req.params.artisan_id })
      return res.status(200).json(items)
    } catch (e) {
      return res.status(400).send(boom.boomify(e))
    }
  },
  async getByUser(req, res) {
    try {
      const items = await Order.find({ user_id: req.params.user_id })
      return res.status(200).json(items)
    } catch (e) {
      return res.status(400).send(boom.boomify(e))
    }
  },
}
