const genController = require('./gen.controller');
const {Artisan} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Artisan),
    // override functions here
}