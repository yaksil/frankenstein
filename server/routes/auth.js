const router = require('express-promise-router')();
const {auth} = require('../controllers/_index');

router.route("/").post(auth.login);

module.exports = router;