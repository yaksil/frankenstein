const genController = require('./gen.controller');
const {Category} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Category),
    // override functions here
}