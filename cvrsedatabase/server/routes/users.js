/**
 * api routes for User model
 * @type {*}
 */

const router = require('express-promise-router')(); //bloody hell i can't believe it
const {user} = require('../controllers/_index.js');

router.route("/").get(user.getAll);
router.route("/:id").get(user.getById);
router.route("/").post(user.create);
router.route("/").get(user.getAll);
router.route("/:id").put(user.updateById);
router.route("/:id").delete(user.delete);

module.exports = router;