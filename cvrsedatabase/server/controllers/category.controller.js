const genController = require('./gen.controller');
const {Category} = require('../models/_index');

const relations = {
    getById: 'product_inventory'
}

module.exports = {
    // function is not a function what the fuck
    ...genController(Category, relations),
    // override functions here
}