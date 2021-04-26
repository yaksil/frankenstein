const genController = require('./gen.controller');
const {Product} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Product),
    // override functions here
}