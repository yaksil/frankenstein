const genController = require('./gen.controller');
const {Artisan} = require('../models/_index');

const relations = {
    getById: ['inventory', 'user_id']
}

module.exports = {
    // function is not a function what the fuck
    ...genController(Artisan, relations),
    // override functions here
}