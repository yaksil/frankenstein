const genController = require('./gen.controller');
const {Cart} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Cart),
    // override functions here
}