/**
 * api routes for Product model
 * @type {*}
 */

const router = require('express-promise-router')(); //bloody hell i can't believe it
const {product} = require('../controllers/_index.js');

router.route("/").get(product.getAll);
router.route("/:id").get(product.getById);
router.route("/").post(product.create);
router.route("/").get(product.getAll);
router.route("/:id").put(product.updateById);
router.route("/:id").delete(product.delete);

module.exports = router;