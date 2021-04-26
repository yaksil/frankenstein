const genController = require('./gen.controller');
const {User} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(User),
    // override functions here
}