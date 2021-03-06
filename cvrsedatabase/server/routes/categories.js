/**
 * api routes for Category model
 * @type {*}
 */

const router = require('express-promise-router')() //bloody hell i can't believe it
const { category } = require('../controllers/_index.js')

router.route('/').get(category.getAll)
router.route('/:id').get(category.getById)
router.route('/').post(category.create)
router.route('/:id').put(category.updateById)
router.route('/:id').delete(category.delete)

module.exports = router
