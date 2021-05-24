/**
 * api routes for Artisan model
 * @type {*}
 */

const router = require('express-promise-router')() //bloody hell i can't believe it
const { checkJWTSign } = require('../middlewares/jwt.vibeCheck.middleware')
const { artisan } = require('../controllers/_index.js')

router.route('/').get(artisan.getAll)
router.route('/:id').get(artisan.getById)
router.route('/').post(artisan.create)
router.route('/').get(artisan.getAll)
router.route('/:id').put(artisan.updateById)
router.route('/:id').delete(artisan.delete)

module.exports = router
