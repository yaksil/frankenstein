/**
 * api routes for Cart model
 * @type {*}
 */

const router = require('express-promise-router')(); //bloody hell i can't believe it
const {cart} = require('../controllers/_index.js');

router.route("/").get(cart.getAll);
router.route("/:id").get(cart.getById);
router.route("/").post(cart.create);
router.route("/").get(cart.getAll);
router.route("/:id").put(cart.updateById);
router.route("/:id").delete(cart.delete);

module.exports = router;