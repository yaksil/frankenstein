/**
 * api routes for Review model
 * @type {*}
 */

const router = require('express-promise-router')() //bloody hell i can't believe it
const { review } = require('../controllers/_index.js')

router.route('/').get(review.getAll)
router.route('/:id').get(review.getById)
router.route('/').post(review.create)
router.route('/:id').put(review.updateById)
router.route('/:id').delete(review.delete)

module.exports = router
