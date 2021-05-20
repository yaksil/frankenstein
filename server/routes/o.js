/**
 * api routes for Cart model
 * @type {*}
 */

const router = require('express-promise-router')(); //bloody hell i can't believe it
const {order: o} = require('../controllers/_index.js');

router.route("/").get(o.getAll);
router.route("/:id").get(o.getById);
router.route("/").post(o.create);
router.route("/").get(o.getAll);
router.route("/:id").put(o.updateById);
router.route("/:id").delete(o.delete);

module.exports = router;