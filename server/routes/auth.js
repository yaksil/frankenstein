const router = require('express-promise-router')();
const {auth} = require('../controllers/_index');

router.route("/login").post(auth.login);
router.route("/refresh").post(auth.refreshMe);
router.route("/logout").post(auth.logout);

module.exports = router;