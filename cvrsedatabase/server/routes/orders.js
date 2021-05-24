/**
 * api routes for Cart model
 * @type {*}
 */

const router = require('express-promise-router')() //bloody hell i can't believe it
const { order } = require('../controllers/_index.js')

router.route('/').get(order.getAll)
router.route('/:id').get(order.getById)
router.route('/').post(order.create)
router.route('/:id').put(order.updateById)
router.route('/:id').delete(order.delete)

module.exports = router
