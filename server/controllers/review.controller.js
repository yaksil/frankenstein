const genController = require('./gen.controller');
const {Review} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Review),
    // override functions here
}